import React from 'react';
import { Box, Divider, Grid } from '@mui/joy';
import { ColorsControl } from './ColorsControl';
import { ExportLottie } from './ExportLottie';
import { ShareLottie } from './ShareLottie';
import { SpeedControl } from './SpeedControl';

export const EditControls = () => {
  return (
    <Grid
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        paddingTop: 0,
        height: '100%',
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
    </Grid>
  );
};
