import React from 'react';
import { Grid } from '@mui/joy';
import { EditControls } from './EditControls';
import { SideBar } from './SideBar';
import { LottieViewer } from './LottieViewer';

export const Content = () => {
  return (
    <Grid sx={{ height: 'calc(100% - 60px)', gridTemplateRows: '100%' }} container>
      <SideBar />
      <Grid xs={12} sm={6} md={5} lg={6} sx={{ height: '100%' }}>
        <LottieViewer />
      </Grid>
      <EditControls />
    </Grid>
  );
};
