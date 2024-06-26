import React from 'react';
import { Box, Typography } from '@mui/joy';
import { useLocation } from 'react-router-dom';
import { useNetworkState } from '../context/NetworkStateContext';

export const NetworkState = () => {
  const { pathname } = useLocation();
  const { isSaving, isConnected } = useNetworkState();

  if (pathname === '/') {
    return null;
  }

  let message = isSaving ? 'Saving...' : 'All updated';

  if (!isConnected) {
    message = 'Disconnected';
  }

  return (
    <Box>
      <Typography
        display='inline'
        p={1}
        color={isSaving || !isConnected ? 'danger' : 'success'}
        variant='soft'
        level='body-sm'
        fontFamily='Noto Sans'
      >
        {message}
      </Typography>
    </Box>
  );
};
