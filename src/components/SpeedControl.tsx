import React from 'react';
import { Slider, styled, Typography } from '@mui/joy';
import { useLottieAnimation } from '../hooks/useLottieAnimation';

const SpeedControlWrapper = styled('div')`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SpeedControl = () => {
  const { frameRate, updateSpeed } = useLottieAnimation();

  const handleSpeedChange = (_e: Event, value: number | number[]) => {
    // TypeCasting since Slider does not accept passing this from the caller
    updateSpeed(value as number);
  };

  if (!frameRate) {
    return <div>Loading...</div>;
  }

  return (
    <SpeedControlWrapper>
      <Typography color='neutral' level='title-md'>
        Speed
      </Typography>
      <Slider
        aria-label='Always visible'
        defaultValue={Math.round(frameRate)}
        step={3}
        min={3}
        max={150}
        onChange={handleSpeedChange}
        valueLabelDisplay='auto'
        sx={{
          '--Slider-trackSize': '4px',
          '--Slider-thumbSize': '10px',
        }}
      />
    </SpeedControlWrapper>
  );
};
