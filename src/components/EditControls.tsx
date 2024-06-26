import React from 'react';
import { Box, Divider } from '@mui/joy';
import { ColorsControl } from './ColorsControl';
import { ExportLottie } from './ExportLottie';
import { ShareLottie } from './ShareLottie';
import { SpeedControl } from './SpeedControl';

export const EditControls = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        paddingTop: 0,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '30px 0',
        }}
      >
        <ShareLottie />
        <ExportLottie />
      </Box>

      <Divider />

      <Box py={'30px'}>
        <SpeedControl />
      </Box>

      <Divider />

      <ColorsControl />
    </Box>
  );
};
