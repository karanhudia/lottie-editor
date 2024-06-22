import React from 'react';
import { Box, ListDivider } from '@mui/joy';
import { ColorsControl } from './ColorsControl';
import { SliderControls } from './SliderControls';

export const EditControls = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.level1',
        display: 'grid',
        gridTemplateRows: '25% 2% auto',
        paddingTop: '20px',
      }}
    >
      <SliderControls />
      <ListDivider />
      <ColorsControl />
    </Box>
  );
};
