import React from 'react';
import { Grid } from '@mui/joy';
import { LayersControl } from './LayersControl';

export const SideBar = () => {
  return (
    <Grid
      sm={0}
      md={3}
      lg={3}
      sx={{
        height: '100%',
        overflow: 'auto',
      }}
    >
      <LayersControl />
    </Grid>
  );
};
