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
    <Stack
      spacing={2}
      sx={{
        minHeight: 0,
        backgroundColor: 'var(--joy-palette-neutral-100, #F0F4F8)',
      }}
    >
      <Player
        autoplay
        loop
        src={lottieJSON}
        lottieRef={handleLottieRefCallback}
        controls
        keepLastFrame
        style={{ height: '100%' }}
        background={'var(--joy-palette-neutral-100, #F0F4F8)'}
      >
        <Controls visible={true} transparentTheme buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </Stack>
  );
};
