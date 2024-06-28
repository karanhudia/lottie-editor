import React, { useState, useCallback } from 'react';
import { useSharedProps } from '../context/SharedPropsContext';
import { Box, RadioGroup, Skeleton, Typography } from '@mui/joy';
import { RgbaColor, RgbaColorPicker } from 'react-colorful';
import { getAnimationLayersInfo } from '../utils/lottie';
import { useLottieAnimation } from '../hooks/useLottieAnimation';
import { ShapeInfo } from '../types/shared';
import { ColorItems } from './ColorItems';
import { rgbaToLottieColor } from '../utils/color';

export const ColorsControl = () => {
  const { updateColor } = useLottieAnimation();

  const [currentColor, setCurrentColor] = useState<RgbaColor | undefined>();
  const { selectedColor, setSelectedColor, lottieJSON, selectedLayer } = useSharedProps();

  const allLayers = getAnimationLayersInfo(lottieJSON);

  const handleColorSelect = useCallback(
    (color: RgbaColor, shapeInfo: ShapeInfo, layer: number[]) => {
      setSelectedColor({
        layer,
        shape: shapeInfo.shapeSeq,
        shapeItem: shapeInfo.shapeItemSeq,
        color: rgbaToLottieColor(color),
      });
      setCurrentColor(color);
    },
    [setSelectedColor],
  );

  const handleColorChange = useCallback(
    (color: RgbaColor) => {
      if (!selectedColor) {
        return;
      }

      const { shape, shapeItem, layer } = selectedColor;
      updateColor(layer, shape, shapeItem, color);
    },
    [selectedColor, updateColor],
  );

  return (
    <Box sx={{ overflow: 'auto', pt: '30px' }}>
      <Typography color='neutral' level='title-lg'>
        {/* TODO: Add translations */}
        Colors
      </Typography>
      <Box
        sx={{
          paddingTop: 2,
          paddingLeft: '2px',
        }}
      >
        <RadioGroup sx={{ gap: 1.5, flexWrap: 'wrap', flexDirection: 'row' }}>
          {!lottieJSON ? (
            Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} animation='wave' variant='circular' width={30} height={30} />
            ))
          ) : (
            <ColorItems
              selectedColor={selectedColor}
              handleColorSelect={handleColorSelect}
              allLayers={selectedLayer ? [selectedLayer] : allLayers}
            />
          )}
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
            color={currentColor}
            onChange={handleColorChange}
          />
        )}
      </Box>
    </Box>
  );
};
