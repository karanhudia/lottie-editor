import React from 'react';
import { Box, Drawer, ModalClose, useTheme } from '@mui/joy';
import { useSharedProps } from '../context/SharedPropsContext';
import { useMediaQuery } from '@mui/material';

export const LayersWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDrawerOpen, setIsDrawerOpen } = useSharedProps();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  if (isDesktop) {
    return <Box sx={{ py: 1 }}>{children}</Box>;
  }

  return (
    <Drawer open={isDrawerOpen} size='sm' onClose={() => setIsDrawerOpen(false)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          ml: 'auto',
          mt: 1,
          mr: 2,
        }}
      >
        <ModalClose id='close-icon' sx={{ position: 'initial' }} />
      </Box>
      {children}
    </Drawer>
  );
};
