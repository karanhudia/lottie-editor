import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { extractColorsFromAnimation, extractColorsFromLayer } from '../utils/extractColors';
import { Box, Button, Input } from '@mui/joy';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/css';
import { ColorBox } from './ColorBox';

export const ColorControl = () => {
  const [color, setColor] = useColor('#f1f1f1');

  const { lottieJSON, selectedLayer } = useContext(SharedProps);

  const colors = extractColorsFromLayer(selectedLayer);
  const allColors = extractColorsFromAnimation(lottieJSON);

  return (
    <div>
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {selectedLayer
          ? colors?.color.map((color) => <ColorBox color={color} />)
          : allColors.map((colors) => colors.color.map((color) => <ColorBox color={color} />))}
      </Box>
      <ColorPicker color={color} onChange={setColor} />;
    </div>
  );
};
