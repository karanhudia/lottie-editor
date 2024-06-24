import { useCallback, useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { RgbaColor } from 'react-colorful';
import { useParams } from 'react-router-dom';
import { useThrottle } from './useThrottle';
import { useSocket } from './useSocket';
import { rgbaToLottieColor } from '../utils/color';

type UseLottieAnimationReturn = {
  frameRate?: number;
  updateSpeed: (newSpeed: number) => void;
  updateScale: (newScale: number) => void;
  updateColor: (
    nestedLayerSeq: number[],
    shapeSeq: number,
    shapeItemSeq: number,
    color: RgbaColor,
  ) => void;
};

export const useLottieAnimation = (): UseLottieAnimationReturn => {
  const params = useParams<{ editId: string }>();

  const { updateJSON } = useSocket();
  const { lottieJSON, setLottieJSON } = useContext(SharedProps);

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

  return {
    frameRate: lottieJSON?.fr,
    updateColor: handleColorUpdate,
    updateScale: handleScaleUpdate,
    updateSpeed: handleSpeedUpdate,
  };
};
