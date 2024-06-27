import { useCallback } from 'react';
import { useSharedProps } from '../context/SharedPropsContext';
import { deleteLottieLayer, updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { RgbaColor } from 'react-colorful';
import { useNavigate, useParams } from 'react-router-dom';
import { useThrottle } from './useThrottle';
import { rgbaToLottieColor } from '../utils/color';
import { v4 as uuidv4 } from 'uuid';
import {
  LottieAnimation,
  LottieSocketEvents,
  SocketAcknowledgement,
  UpdateLottieMessage,
} from '../graphql/lottie-server/generated';
import { EditorRouteParams } from '../components/Editor';
import { SaveState, socket, useNetworkState } from '../context/NetworkStateContext';

type UseLottieAnimationReturn = {
  frameRate?: number;
  importLottie: (json: LottieAnimation) => void;
  updateSpeed: (newSpeed: number) => void;
  updateScale: (newScale: number) => void;
  updateColor: (
    nestedLayerSeq: number[],
    shapeSeq: number,
    shapeItemSeq: number,
    color: RgbaColor,
  ) => void;
  deleteLayer: (layer: number[]) => void;
};

const THROTTLE_TIME = 200; // 200 milliseconds

export const useLottieAnimation = (): UseLottieAnimationReturn => {
  const params = useParams<EditorRouteParams>();
  const navigate = useNavigate();

  const { addToSaveQueue, removeFromSaveQueue, setVersionConflict } = useNetworkState();
  const {
    lottieJSON,
    setLottieJSON,
    animationVersion,
    updateAnimationVersion,
    setIsAnimationCreated,
    updateLayer,
  } = useSharedProps();

  const checkVersionConflicts = useCallback(
    (response: SocketAcknowledgement) => {
      if (response.code === 409) {
        setVersionConflict(true);
      }
    },
    [setVersionConflict],
  );

  const updateJSON = useCallback((message: UpdateLottieMessage): Promise<SocketAcknowledgement> => {
    return socket.emitWithAck(
      LottieSocketEvents.UpdateJson,
      message,
    ) as Promise<SocketAcknowledgement>;
  }, []);

  const syncLayerChangesWithServer = useCallback(
    async (layer: number[]) => {
      try {
        if (!params.editId) {
          return;
        }

        // Update version locally for following updates without acknowledgement from server
        const localVersion = animationVersion;
        updateAnimationVersion();

        const response = await updateJSON({
          uuid: params.editId,
          payload: {
            __typename: 'LayerPayload',
            layer,
          },
          version: localVersion,
        });

        checkVersionConflicts(response);

        if (response.code === 200) {
          console.info('Layer deleted');
        } else {
          console.error('Failed to delete layer:', response.status);
        }

        removeFromSaveQueue(SaveState.LayerDelete);
      } catch (error) {
        console.error('Error deleting layer:', error);
      }
    },
    [
      updateJSON,
      params.editId,
      removeFromSaveQueue,
      animationVersion,
      updateAnimationVersion,
      checkVersionConflicts,
    ],
  );

  const syncColorChangesWithServer = useThrottle(
    async (nestedLayerSeq: number[], shapeSeq: number, shapeItemSeq: number, color: number[]) => {
      try {
        if (!params.editId) {
          return;
        }

        // Update version locally for following updates without acknowledgement from server
        const localVersion = animationVersion;
        updateAnimationVersion();

        const response = await updateJSON({
          uuid: params.editId,
          payload: {
            __typename: 'ColorPayload',
            layer: nestedLayerSeq,
            shape: shapeSeq,
            shapeItem: shapeItemSeq,
            color,
          },
          version: localVersion,
        });

        checkVersionConflicts(response);

        if (response.code === 200) {
          console.info('Color updated');
        } else {
          console.error('Failed to update color:', response.status);
        }

        // Since it is throttled, we can set directly to 0
        removeFromSaveQueue(SaveState.ColorUpdate, 0);
      } catch (error) {
        console.error('Error updating color:', error);
      }
    },
    THROTTLE_TIME,
  );

  const syncSpeedChangesWithServer = useThrottle(async (frameRate: number) => {
    try {
      if (!params.editId) {
        return;
      }

      // Update version locally for following updates without acknowledgement from server
      const localVersion = animationVersion;
      updateAnimationVersion();

      const response = await updateJSON({
        uuid: params.editId,
        payload: {
          __typename: 'SpeedPayload',
          frameRate,
        },
        version: localVersion,
      });

      checkVersionConflicts(response);

      if (response.code === 200) {
        console.info('Speed updated');
      } else {
        console.error('Failed to update speed:', response.status);
      }

      // Since it is throttled, we can set directly to 0
      removeFromSaveQueue(SaveState.SpeedUpdate, 0);
    } catch (error) {
      console.error('Error updating speed:', error);
    }
  }, THROTTLE_TIME);

  const handleLottieImport = useCallback(
    (json: LottieAnimation) => {
      const uuid = uuidv4();

      setLottieJSON(json);
      setIsAnimationCreated(true);
      // Reset Animation Status
      updateAnimationVersion(1);
      setVersionConflict(false);
      updateLayer();
      navigate(`edit/${uuid}`);
    },
    [navigate, setLottieJSON, setIsAnimationCreated, updateAnimationVersion, setVersionConflict],
  );

  const handleSpeedUpdate = useCallback(
    (newSpeed: number) => {
      try {
        if (!lottieJSON) {
          return;
        }

        addToSaveQueue(SaveState.SpeedUpdate);
        setLottieJSON(updateLottieSpeed(lottieJSON, newSpeed));
        syncSpeedChangesWithServer(newSpeed);
      } catch (error) {
        console.error('Error updating speed:', error);
      }
    },
    [lottieJSON, setLottieJSON, syncSpeedChangesWithServer, addToSaveQueue],
  );

  const handleScaleUpdate = () => {
    // TODO: Handle Scale
  };

  const handleColorUpdate = useCallback(
    (nestedLayerSeq: number[], shapeSeq: number, shapeItemSeq: number, color: RgbaColor) => {
      try {
        if (!lottieJSON) {
          return;
        }

        addToSaveQueue(SaveState.ColorUpdate);
        setLottieJSON(updateLottieColor(lottieJSON, nestedLayerSeq, shapeSeq, shapeItemSeq, color));
        syncColorChangesWithServer(
          nestedLayerSeq,
          shapeSeq,
          shapeItemSeq,
          rgbaToLottieColor(color),
        );
      } catch (error) {
        console.error('Error updating color:', error);
      }
    },
    [lottieJSON, setLottieJSON, syncColorChangesWithServer, addToSaveQueue],
  );

  const handleLayerDelete = useCallback(
    (layer: number[]) => {
      try {
        if (!lottieJSON) {
          return;
        }

        addToSaveQueue(SaveState.LayerDelete);
        setLottieJSON(deleteLottieLayer(lottieJSON, layer));
        void syncLayerChangesWithServer(layer);
      } catch (error) {
        console.error('Error deleting layer:', error);
      }
    },
    [lottieJSON, setLottieJSON, syncLayerChangesWithServer, addToSaveQueue],
  );

  return {
    frameRate: lottieJSON?.fr,
    importLottie: handleLottieImport,
    updateColor: handleColorUpdate,
    updateScale: handleScaleUpdate,
    updateSpeed: handleSpeedUpdate,
    deleteLayer: handleLayerDelete,
  };
};
