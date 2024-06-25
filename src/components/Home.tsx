import React from 'react';
import { Grid } from '@mui/joy';
import { UploadLottie } from './UploadLottie';
import { FeaturedAnimations } from './FeaturedAnimations';

export const Home = () => {
  return (
    <Grid container sx={{ width: '100%', height: 'calc(100% - 60px)' }}>
      <Grid xs={12} md={4}>
        <UploadLottie />
      </Grid>
      <Grid xs={12} md={8} alignContent='center'>
        <FeaturedAnimations />
      </Grid>
    </Grid>
  );
};
