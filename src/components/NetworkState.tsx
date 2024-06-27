import React from 'react';
import { Box, Skeleton, Typography } from '@mui/joy';
import { useLocation } from 'react-router-dom';
import { useNetworkState } from '../context/NetworkStateContext';
import { useSharedProps } from '../context/SharedPropsContext';

export const NetworkState = () => {
  const { pathname } = useLocation();
  const { lottieJSON } = useSharedProps();
  const { isSaving, isConnected, hasVersionConflict } = useNetworkState();

  if (pathname === '/') {
    return null;
  }

  const getMessage = () => {
    if (hasVersionConflict) {
      return 'Server conflicts. Try again!';
    }
    if (!isConnected) {
      return 'Disconnected';
    }
    return isSaving ? 'Saving...' : 'Synced';
  };

  const showDanger = isSaving || !isConnected || hasVersionConflict;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {!lottieJSON ? (
        <Skeleton variant='text' level='h3' width='80px' />
      ) : (
        <Typography
          display='inline'
          p={1}
          color={showDanger ? 'danger' : 'success'}
          variant='soft'
          level='body-sm'
          fontFamily='Noto Sans'
        >
          {getMessage()}
        </Typography>
      )}
    </Box>
  );
};
