import React, { useContext } from 'react';
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SharedProps } from '../context/SharedPropsContext';

export const LottieViewer = () => {
  const { setDotLottie, lottieJSON } = useContext(SharedProps);

  const dotLottieRefCallback = (dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  };

  return (
    <DotLottieReact
      data={JSON.stringify(lottieJSON)}
      loop
      autoplay
      dotLottieRefCallback={dotLottieRefCallback}
    />
  );
};
