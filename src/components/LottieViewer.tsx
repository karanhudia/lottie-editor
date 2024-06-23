import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { Stack } from '@mui/joy';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import { AnimationItem } from 'lottie-web';

export const LottieViewer = () => {
  const { setLottiePlayerRef, lottieJSON } = useContext(SharedProps);

  const handleLottieRefCallback = (dotLottie: AnimationItem) => {
    setLottiePlayerRef(dotLottie);
  };

  if (!lottieJSON) {
    return <div>Loading Lottie...</div>;
  }

  return (
    <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
      <Player
        autoplay
        loop
        src={lottieJSON}
        lottieRef={handleLottieRefCallback}
        controls
        keepLastFrame
        style={{ height: '100%' }}
      >
        <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </Stack>
  );
};
