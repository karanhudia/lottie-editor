import React from 'react';
import { useSharedProps } from '../context/SharedPropsContext';
import { Box, RadioGroup, Typography } from '@mui/joy';
import { RgbaColor, RgbaColorPicker } from 'react-colorful';
import { getAnimationLayersInfo } from '../utils/lottie';
import { useLottieAnimation } from '../hooks/useLottieAnimation';
import { ShapeInfo } from '../types/shared';
import { ColorItems } from './ColorItems';
import { lottieColorToRgba, rgbaToLottieColor } from '../utils/color';

export const ColorsControl = () => {
  const { updateColor } = useLottieAnimation();

  const { selectedColor, setSelectedColor, lottieJSON, selectedLayer } = useSharedProps();

  const allLayers = getAnimationLayersInfo(lottieJSON);

  const handleColorSelect = (selectedColor: RgbaColor, shapeInfo: ShapeInfo, layer: number[]) => {
    setSelectedColor({
      layer,
      shape: shapeInfo.shapeSeq,
      shapeItem: shapeInfo.shapeItemSeq,
      color: rgbaToLottieColor(selectedColor),
    });
  };

  const handleColorChange = (color: RgbaColor) => {
    if (!selectedColor) {
      return;
    }

    const { shape, shapeItem, layer } = selectedColor;
    updateColor(layer, shape, shapeItem, color);
  };

  return (
    <Box sx={{ overflow: 'auto' }}>
      <Typography color='neutral' level='title-lg'>
        {/* TODO: Add translations */}
        Colors
      </Typography>
      <Box
        sx={{
          paddingTop: 2,
        }}
      >
        <RadioGroup sx={{ gap: 1.5, flexWrap: 'wrap', flexDirection: 'row' }}>
          <ColorItems
            selectedColor={selectedColor}
            handleColorSelect={handleColorSelect}
            allLayers={selectedLayer ? [selectedLayer] : allLayers}
          />
        </RadioGroup>
      </Box>
      <Box
        padding={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {selectedColor && (
          <RgbaColorPicker
            data-testid='rgba-color-picker'
            color={lottieColorToRgba(selectedColor.color)}
            onChange={handleColorChange}
          />
        )}
      </Box>
    </Box>
  );
};
