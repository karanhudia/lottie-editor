import React, { useContext } from 'react';
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SharedProps } from '../context/SharedPropsContext';
import { Stack } from '@mui/joy';

export const LottieViewer = () => {
  const { setDotLottie, lottieJSON } = useContext(SharedProps);

  const dotLottieRefCallback = (dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  };

  return (
    <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
      <DotLottieReact
        data={JSON.stringify(lottieJSON)}
        loop
        autoplay
        dotLottieRefCallback={dotLottieRefCallback}
      />
    </Stack>
  );
};
