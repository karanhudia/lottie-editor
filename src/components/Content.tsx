import React from 'react';
import { Box } from '@mui/joy';
import { LottieViewer } from './LottieViewer';
import { EditControls } from './EditControls';
import { LayersControl } from './LayersControl';

export const Content = () => {
  return (
    <Box
      component='main'
      sx={{
        height: 'calc(100vh - 55px)', // 55px is the height of the NavBar
        display: 'grid',
        gridTemplateColumns: { xs: 'auto', md: '20% 50% 30%' },
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <LayersControl />
      <LottieViewer />
      <EditControls />
    </Box>
  );
};
