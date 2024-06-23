import React from 'react';
import { Box, Divider, Typography } from '@mui/joy';
import { FileUpload } from './FileUpload';
import { FeaturedAnimations } from './FeaturedAnimations';

export const Home = () => {
  return (
    <Box
      alignContent='center'
      alignItems='center'
      width='100%'
      sx={{ height: '100%', display: 'grid', gridTemplateColumns: '29% 2% 69%' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography color='neutral' level='h2'>
          Upload Your Animation
        </Typography>
        <Box pt={2}>
          <FileUpload />
        </Box>
      </Box>
      <Divider orientation='vertical' />
      <FeaturedAnimations />
    </Box>
  );
};
