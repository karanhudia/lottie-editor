import { useCallback, useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { deleteLottieLayer, updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { RgbaColor } from 'react-colorful';
import { useNavigate, useParams } from 'react-router-dom';
import { useThrottle } from './useThrottle';
import { useSocket } from './useSocket';
import { rgbaToLottieColor } from '../utils/color';
import { v4 as uuidv4 } from 'uuid';
import { LottieAnimation } from '../graphql/lottie-server/generated';

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

export const useLottieAnimation = (): UseLottieAnimationReturn => {
  const params = useParams<{ editId: string }>();
  const navigate = useNavigate();

  const { updateJSON } = useSocket();
  const { lottieJSON, setLottieJSON, setIsAnimationCreated } = useContext(SharedProps);

  const syncLayerChangesWithServer = useCallback(
    async (layer: number[]) => {
      if (!params.editId) {
        return;
      }

      const response = await updateJSON({
        uuid: params.editId,
        payload: {
          __typename: 'LayerPayload',
          layer,
        },
      });

      if (response.code === 200) {
        console.info('Layer deleted');
      }
    },
    [updateJSON, params?.editId],
  );

  const syncColorChangesWithServer = useThrottle(
    async (nestedLayerSeq: number[], shapeSeq: number, shapeItemSeq: number, color: number[]) => {
      if (!params.editId) {
        return;
      }

      const response = await updateJSON({
        uuid: params.editId,
        payload: {
          __typename: 'ColorPayload',
          layer: nestedLayerSeq,
          shape: shapeSeq,
          shapeItem: shapeItemSeq,
          color,
        },
      });

      if (response.code === 200) {
        console.info('Color updated');
      }
    },
    1000,
  );

  const syncSpeedChangesWithServer = useThrottle(async (frameRate: number) => {
    if (!params.editId) {
      return;
    }

    const response = await updateJSON({
      uuid: params.editId,
      payload: {
        __typename: 'SpeedPayload',
        frameRate,
      },
    });

    if (response.code === 200) {
      console.info('Speed updated');
    }
  }, 1000);

  const handleLottieImport = useCallback(
    (json: LottieAnimation) => {
      const uuid = uuidv4();

      setLottieJSON(json);
      setIsAnimationCreated(true);
      navigate(`edit/${uuid}`);
    },
    [navigate, setLottieJSON, setIsAnimationCreated],
  );

  const handleSpeedUpdate = useCallback(
    (newSpeed: number) => {
      if (!lottieJSON) {
        return;
      }

      setLottieJSON(updateLottieSpeed(lottieJSON, newSpeed));
      syncSpeedChangesWithServer(newSpeed);
    },
    [lottieJSON, setLottieJSON, syncSpeedChangesWithServer],
  );

  const handleScaleUpdate = () => {
    // TODO: Handle Scale
  };

  const handleColorUpdate = useCallback(
    (nestedLayerSeq: number[], shapeSeq: number, shapeItemSeq: number, color: RgbaColor) => {
      if (!lottieJSON) {
        return;
      }

      setLottieJSON(updateLottieColor(lottieJSON, nestedLayerSeq, shapeSeq, shapeItemSeq, color));
      syncColorChangesWithServer(nestedLayerSeq, shapeSeq, shapeItemSeq, rgbaToLottieColor(color));
    },
    [lottieJSON, setLottieJSON, syncColorChangesWithServer],
  );

  const handleLayerDelete = useCallback(
    (layer: number[]) => {
      if (!lottieJSON) {
        return;
      }

      setLottieJSON(deleteLottieLayer(lottieJSON, layer));
      void syncLayerChangesWithServer(layer);
    },
    [lottieJSON, setLottieJSON, syncLayerChangesWithServer],
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
