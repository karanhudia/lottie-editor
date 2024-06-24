import React from 'react';
import { Box, Divider } from '@mui/joy';
import { ColorsControl } from './ColorsControl';
import { SliderControls } from './SliderControls';
import { ExportLottie } from './ExportLottie';

export const EditControls = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: '10% 1% 20% 2% auto',
        padding: 3,
        paddingTop: 0,
        overflow: 'hidden',
      }}
    >
      <ExportLottie />
      <Divider />
      <SliderControls />
      <Divider />
      <ColorsControl />
    </Box>
  );
};
