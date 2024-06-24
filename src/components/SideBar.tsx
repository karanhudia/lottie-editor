import React from 'react';
import { Box } from '@mui/joy';
import { LayersControl } from './LayersControl';

export const SideBar = () => {
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <LayersControl />
    </Box>
  );
};
