import { useCallback, useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { RgbaColor } from 'react-colorful';
import { useParams } from 'react-router-dom';
import { rgbaToLottieColor } from '../utils/extractColors';
import { useThrottle } from './useThrottle';
import { useSocket } from './useSocket';

type UseLottieAnimationReturn = {
  frameRate?: number;
  updateSpeed: (newSpeed: number) => void;
  updateScale: (newScale: number) => void;
  updateColor: (layerSeq: number, shapeSeq: number, shapeItemSeq: number, color: RgbaColor) => void;
};

export const useLottieAnimation = (): UseLottieAnimationReturn => {
  const params = useParams<{ editId: string }>();

  const { updateJSON } = useSocket();
  const { lottieJSON, setLottieJSON } = useContext(SharedProps);

  const syncColorChangesWithServer = useCallback(
    useThrottle(
      async (layerSeq: number, shapeSeq: number, shapeItemSeq: number, color: number[]) => {
        if (!params.editId) {
          return;
        }

        const response = await updateJSON({
          uuid: params.editId,
          payload: {
            __typename: 'ColorPayload',
            layer: layerSeq,
            shape: shapeSeq,
            shapeItem: shapeItemSeq,
            color,
          },
        });

        if (response.status === 200) {
          console.info('Color updated');
        }
      },
      1000,
    ),
    [params.editId, updateJSON],
  );

  const syncSpeedChangesWithServer = useCallback(
    useThrottle(async (frameRate: number) => {
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

      if (response.status === 200) {
        console.info('Speed updated');
      }
    }, 1000),
    [params.editId, updateJSON],
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
    (layerSeq: number, shapeSeq: number, shapeItemSeq: number, color: RgbaColor) => {
      if (!lottieJSON) {
        return;
      }

      setLottieJSON(updateLottieColor(lottieJSON, layerSeq, shapeSeq, shapeItemSeq, color));
      syncColorChangesWithServer(layerSeq, shapeSeq, shapeItemSeq, rgbaToLottieColor(color));
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
