import React from 'react';
import { Slider, styled, Typography } from '@mui/joy';

const ScaleControlWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;

export const ScaleControl = () => {
  const handleScaleChange = (_e: Event, value: number | number[]) => {
    console.log(value);
  };

  return (
    <ScaleControlWrapper>
      <Typography level='h4'>Scale</Typography>
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