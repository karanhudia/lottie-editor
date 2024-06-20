import React, { useContext } from 'react';
import { Box, Slider, Typography } from '@mui/joy';
import { SharedProps } from '../context/SharedPropsContext';
import { ColorControl } from './ColorControl';

export const EditControls = () => {
  const { dotLottie } = useContext(SharedProps);

  return (
    <Box
      sx={{
        backgroundColor: 'background.level1',
      }}
    >
      <ColorControl />
      <Box sx={{ width: 300 }}>
        <Typography>Scale</Typography>
        <Slider aria-label='Always visible' defaultValue={80} step={1} valueLabelDisplay='on' />
      </Box>
      <Box sx={{ width: 300 }}>
        <Typography>Speed</Typography>
        <Slider
          aria-label='Always visible'
          defaultValue={1}
          step={0.1}
          min={0.1}
          max={5}
          onChange={(e, value) => {
            console.log(value);
            dotLottie?.setSpeed(value as number);
          }}
          valueLabelDisplay='on'
        />
      </Box>
    </Box>
  );
};
