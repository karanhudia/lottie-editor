import React from 'react';
import { Box } from '@mui/joy';
import { FileUpload } from './FileUpload';
import { FeaturedAnimations } from './FeaturedAnimations';

export const Home = () => {
  return (
    <Box
      alignContent='center'
      alignItems='center'
      width='100%'
      sx={{
        height: 'calc(100% - 60px)',
        display: 'grid',
        gridTemplateColumns: '30% 70%',
        gridTemplateRows: '100%',
      }}
    >
      <FileUpload />
      <FeaturedAnimations />
    </Box>
  );
};
