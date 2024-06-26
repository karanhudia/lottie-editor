import React from 'react';
import { Avatar, Box, IconButton, Link, Typography } from '@mui/joy';
import LottieFilesLogo from '../assets/lottie.svg';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { NetworkState } from './NetworkState';
import { MenuOutlined } from '@mui/icons-material';
import { useSharedProps } from '../context/SharedPropsContext';

export const Header = () => {
  const { pathname } = useLocation();
  const { setIsDrawerOpen } = useSharedProps();

  const isHomePage = pathname === '/';

  return (
    <Box
      component='header'
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        boxShadow:
          'var(--joy-shadowRing, 0 0 #000),0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))',
        padding: '10px 15px',
      }}
    >
      <Link component={RouterLink} to={'/'} underline='none'>
        <Avatar alt='Lottie Files Logo' src={LottieFilesLogo} />
        <Typography level='h4' color='neutral' pl={1}>
          Lotties
        </Typography>
      </Link>
      <NetworkState />
      {/* Mobile Hamburg Icon for Layers Drawer */}
      {!isHomePage && (
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
          <IconButton variant='outlined' color='neutral' onClick={() => setIsDrawerOpen(true)}>
            <MenuOutlined />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
