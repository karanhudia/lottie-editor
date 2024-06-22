import React from 'react';
import { Slider, styled, Typography } from '@mui/joy';

const SpeedControlWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;

export const SpeedControl = () => {
  const handleSpeedChange = (_e: Event, value: number | number[]) => {
    console.log(value);
  };

  return (
    <SpeedControlWrapper>
      <Typography level='h4'>Speed</Typography>
      <Slider
        aria-label='Always visible'
        defaultValue={1}
        step={0.1}
        min={0.1}
        max={5}
        onChange={handleSpeedChange}
        valueLabelDisplay='auto'
      />
    </SpeedControlWrapper>
  );
};