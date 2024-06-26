import React from 'react';
import { Box, Typography } from '@mui/joy';
import { useNetworkState } from '../context/NetworkStateContext';

export const NetworkState = () => {
  const { isSaving, isConnected } = useNetworkState();

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
