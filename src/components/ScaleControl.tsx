import React from 'react';
import { Slider, styled, Typography } from '@mui/joy';
import { useLottieAnimation } from '../hooks/useLottieAnimation';

const ScaleControlWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;

export const ScaleControl = () => {
  const { updateScale } = useLottieAnimation();
  const handleScaleChange = (_e: Event, value: number | number[]) => {
    updateScale(value as number);
  };

  return (
    <ScaleControlWrapper>
      <Typography color='neutral' level='h4'>
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
      />
    </ScaleControlWrapper>
  );
};
