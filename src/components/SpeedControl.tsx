import React, { useCallback, useEffect, useState } from 'react';
import { Skeleton, Slider, styled, Typography } from '@mui/joy';
import { useLottieAnimation } from '../hooks/useLottieAnimation';

const SpeedControlWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SpeedControl = () => {
  const [speed, setSpeed] = useState<number | null>(null);
  const { frameRate, updateSpeed } = useLottieAnimation();

  const handleSpeedChange = useCallback(
    (_e: React.SyntheticEvent | Event, value: number | number[]) => {
      // TypeCasting since Slider does not accept passing this from the caller
      updateSpeed(value as number);
    },
    [updateSpeed],
  );

  const handleSpeed = useCallback((_e: Event, value: number | number[]) => {
    setSpeed(value as number);
  }, []);

  useEffect(() => {
    if (frameRate && speed !== frameRate) {
      setSpeed(Math.round(frameRate));
    }
  }, [frameRate, speed]);

  return (
    <SpeedControlWrapper>
      <Typography color='neutral' level='title-md'>
        Speed
      </Typography>
      {!speed ? (
        <Skeleton variant='text' level='h2' />
      ) : (
        <Slider
          aria-label='Always visible'
          value={speed}
          step={3}
          min={3}
          max={150}
          onChange={handleSpeed}
          onChangeCommitted={handleSpeedChange}
          valueLabelDisplay='auto'
          sx={{
            '--Slider-trackSize': '4px',
            '--Slider-thumbSize': '10px',
          }}
        />
      )}
    </SpeedControlWrapper>
  );
};
