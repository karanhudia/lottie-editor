import React from 'react';
import { SpeedControl } from './SpeedControl';
import { ScaleControl } from './ScaleControl';
import { Box } from '@mui/joy';

export const SliderControls = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <SpeedControl />
      <ScaleControl />
    </Box>
  );
};
