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
  namedOperations,
  SocketAcknowledgement,
  UpdateLottieMessage,
} from '../graphql/lottie-server/generated';
import { EditorRouteParams } from '../components/Editor';
import { SaveState, socket, useNetworkState } from '../context/NetworkStateContext';
import { client } from '../graphql/client';
import { useUpdateQueue } from './useUpdateQueue';

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

const THROTTLE_TIME = 500; // 500 milliseconds

export const useLottieAnimation = (): UseLottieAnimationReturn => {
  const params = useParams<EditorRouteParams>();
  const navigate = useNavigate();

  const { addToSaveQueue, removeFromSaveQueue, setVersionConflict } = useNetworkState();
  const { lottieJSON, setLottieJSON, animationVersion, setIsAnimationCreated, updateLayer } =
    useSharedProps();
  const { queueUpdate, updateQueue } = useUpdateQueue();

  const checkVersionConflicts = useCallback(
    async (response: SocketAcknowledgement) => {
      if (response.code === 409) {
        setVersionConflict(true);
        // Reset queue and cancel all if a conflict arises
        updateQueue.current = [];
        // Fetch the latest version of lottie animation
        await client.refetchQueries({
          include: [namedOperations.Query.fetchEditedLottie],
        });
      }
    },
    [setVersionConflict, updateQueue],
  );

  const updateJSON = useCallback((message: UpdateLottieMessage): Promise<SocketAcknowledgement> => {
    return socket.emitWithAck(
      LottieSocketEvents.UpdateJson,
      message,
    ) as Promise<SocketAcknowledgement>;
  }, []);

  const syncLayerChangesWithServer = useCallback(
    (layer: number[]) => {
      const task = async () => {
        try {
          if (!params.editId) {
            return;
          }

          const localVersion = animationVersion.current;
          animationVersion.current += 1;

          const response = await updateJSON({
            uuid: params.editId,
            payload: {
              __typename: 'LayerPayload',
              layer,
            },
            version: localVersion,
          });

          await checkVersionConflicts(response);

          if (response.code === 200) {
            console.info('Layer deleted');
          } else {
            console.error('Failed to delete layer:', response.status);
          }

          removeFromSaveQueue(SaveState.LayerDelete);
        } catch (error) {
          console.error('Error deleting layer:', error);
        }
      };

      queueUpdate(task);
    },
    [
      updateJSON,
      params.editId,
      removeFromSaveQueue,
      animationVersion,
      queueUpdate,
      checkVersionConflicts,
    ],
  );

  const syncColorChangesWithServer = useThrottle(
    (nestedLayerSeq: number[], shapeSeq: number, shapeItemSeq: number, color: number[]) => {
      const task = async () => {
        try {
          if (!params.editId) {
            return;
          }

          const localVersion = animationVersion.current;
          animationVersion.current += 1;

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

          await checkVersionConflicts(response);

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
      };

      queueUpdate(task);
    },
    THROTTLE_TIME,
  );

  const syncSpeedChangesWithServer = useThrottle((frameRate: number) => {
    const task = async () => {
      try {
        if (!params.editId) {
          return;
        }

        const localVersion = animationVersion.current;
        animationVersion.current += 1;

        const response = await updateJSON({
          uuid: params.editId,
          payload: {
            __typename: 'SpeedPayload',
            frameRate,
          },
          version: localVersion,
        });

        await checkVersionConflicts(response);

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
    };

    queueUpdate(task);
  }, THROTTLE_TIME);

  const handleLottieImport = useCallback(
    (json: LottieAnimation) => {
      const uuid = uuidv4();

      setLottieJSON(json);
      setIsAnimationCreated(true);
      // Reset Animation Status
      animationVersion.current = 1;
      setVersionConflict(false);
      updateLayer();
      navigate(`edit/${uuid}`);
    },
    [
      navigate,
      setLottieJSON,
      setIsAnimationCreated,
      animationVersion,
      setVersionConflict,
      updateLayer,
    ],
  );

  const handleSpeedUpdate = useCallback(
    (newSpeed: number) => {
      try {
        if (!lottieJSON) {
          return;
        }

        addToSaveQueue(SaveState.SpeedUpdate);
        setLottieJSON(updateLottieSpeed(lottieJSON, newSpeed));
        void syncSpeedChangesWithServer(newSpeed);
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
