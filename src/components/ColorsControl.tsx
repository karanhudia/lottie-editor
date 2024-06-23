import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { lottieColorToRgba } from '../utils/color';
import { Box, RadioGroup, Typography } from '@mui/joy';
import { SelectableColorItem } from './SelectableColorItem';
import { RgbaColor, RgbaColorPicker } from 'react-colorful';
import { getAnimationLayersInfo } from '../utils/lottie';
import { useLottieAnimation } from '../hooks/useLottieAnimation';
import { ShapeInfo } from '../types/shared';

export const ColorsControl = () => {
  const { updateColor } = useLottieAnimation();

  const { selectedColor, setSelectedColor, lottieJSON, selectedLayer } = useContext(SharedProps);

  const allLayers = getAnimationLayersInfo(lottieJSON);

  const handleColorSelect = (selectedColor: RgbaColor, shapeInfo: ShapeInfo, layerSeq: number) => {
    setSelectedColor({
      layerSeq: layerSeq,
      shapeSeq: shapeInfo.shapeSeq,
      shapeItemSeq: shapeInfo.shapeItemSeq,
      color: selectedColor,
    });
  };

  const handleColorChange = (color: RgbaColor) => {
    if (!selectedColor) {
      return;
    }

    const { layerSeq, shapeSeq, shapeItemSeq } = selectedColor;
    updateColor(layerSeq, shapeSeq, shapeItemSeq, color);
  };

  const renderColorItems = () => {
    const layersToShow = selectedLayer ? [selectedLayer] : allLayers;

    return layersToShow.map(({ shapes, layerSeq }, layerIndex) => {
      return shapes.map((shapeInfo, shapeIndex) => {
        const uniqueId = `layer-${layerSeq},shape-${shapeInfo.shapeSeq},shapeItem-${shapeInfo.shapeItemSeq}`;

        const selectedId = selectedColor
          ? `layer-${selectedColor.layerSeq},shape-${selectedColor.shapeSeq},shapeItem-${selectedColor.shapeItemSeq}`
          : null;

        return (
          <SelectableColorItem
            key={uniqueId}
            id={uniqueId}
            selected={selectedId === uniqueId}
            color={lottieColorToRgba(shapeInfo.color)}
            onSelect={(selectedColor) => {
              handleColorSelect(selectedColor, shapeInfo, layerSeq);
            }}
          />
        );
      });
    });
  };

  return (
    <div>
      <Typography color='neutral' level='h4'>
        {/* TODO: Add translations */}
        Colors
      </Typography>
      <Box
        sx={{
          padding: 4,
          paddingTop: 2,
        }}
      >
        <RadioGroup sx={{ gap: 1.5, flexWrap: 'wrap', flexDirection: 'row' }}>
          {renderColorItems()}
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
          <RgbaColorPicker color={selectedColor.color} onChange={handleColorChange} />
        )}
      </Box>
    </div>
  );
};
