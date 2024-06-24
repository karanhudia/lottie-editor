import React from 'react';
import { Slider, styled, Typography } from '@mui/joy';
import { useLottieAnimation } from '../hooks/useLottieAnimation';

const ScaleControlWrapper = styled('div')`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ScaleControl = () => {
  const { updateScale } = useLottieAnimation();
  const handleScaleChange = (_e: Event, value: number | number[]) => {
    updateScale(value as number);
  };

  return (
    <ScaleControlWrapper>
      <Typography color='neutral' level='title-md'>
        Scale
      </Typography>
      <Slider
        aria-label='Always visible'
        defaultValue={1}
        step={0.1}
        min={0.1}
        max={5}
        onChange={handleScaleChange}
        valueLabelDisplay='auto'
        sx={{
          '--Slider-trackSize': '4px',
          '--Slider-thumbSize': '10px',
        }}
      />
    </ScaleControlWrapper>
  );
};
