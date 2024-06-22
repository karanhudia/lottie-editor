import { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { updateLottieColorProperty } from '../utils/lottie';
import { RgbaColor } from 'react-colorful';
import { socket } from '../socket';
import { useParams } from 'react-router-dom';
import { rgbaToLottieColor } from '../utils/extractColors';
import { useThrottle } from './useThrottle';

type UseLottieAnimationReturn = {
  updateSpeed: (newSpeed: number) => void;
  updateScale: (newScale: number) => void;
  updateColor: (layerSeq: number, shapeSeq: number, shapeItemSeq: number, color: RgbaColor) => void;
};

export const useLottieAnimation = (): UseLottieAnimationReturn => {
  const params = useParams<{ editId: string }>();
  const { lottieJSON, setLottieJSON, lottiePlayerRef } = useContext(SharedProps);

  const syncColorChangesWithServer = (
    layerSeq: number,
    shapeSeq: number,
    shapeItemSeq: number,
    color: number[],
  ) => {
    console.log('Updating color:', color);
    socket.emit('updateJSON', {
      type: 'color',
      uuid: params.editId,
      payload: {
        layer: layerSeq,
        shape: shapeSeq,
        shapeItem: shapeItemSeq,
        color,
      },
    });
  };

  const handleSpeedUpdate = (multiplier: number) => {
    if (!lottieJSON) {
      return;
    }

    lottiePlayerRef?.setSpeed(multiplier);
    // setLottieJSON({
    //   ...lottieJSON
    //   fr: (30 ?? 1) * multiplier,
    // });
  };

  const handleScaleUpdate = () => {
    // TODO: Handle Scale
    lottiePlayerRef?.resize();
  };

  const handleThrottledColorUpdate = useThrottle(
    (layerSeq: number, shapeSeq: number, shapeItemSeq: number, color: RgbaColor) => {
      if (!lottieJSON) {
        return;
      }

      const updatedLottie = updateLottieColorProperty(
        lottieJSON,
        layerSeq,
        shapeSeq,
        shapeItemSeq,
        color,
      );

      setLottieJSON(updatedLottie);
      syncColorChangesWithServer(layerSeq, shapeSeq, shapeItemSeq, rgbaToLottieColor(color));
    },
    1000,
  );

  return {
    updateColor: handleThrottledColorUpdate,
    updateScale: handleScaleUpdate,
    updateSpeed: handleSpeedUpdate,
  };
};
