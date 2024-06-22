import React, { useContext, useState } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { RGBToHex } from '../utils/extractColors';
import { Box, RadioGroup, Typography } from '@mui/joy';
import { SelectableColorItem } from './SelectableColorItem';
import { RgbaColor, RgbaColorPicker } from 'react-colorful';
import { getLottieDPArray, ShapeInfo } from '../utils/lottie';

export const ColorsControl = () => {
  const [selectedShape, setSelectedShape] = useState<ShapeInfo | null>(null);
  const { selectedColor, setSelectedColor, lottieJSON, selectedLayer } = useContext(SharedProps);

  const lottieDp = getLottieDPArray(lottieJSON);

  const handleColorSelect = (selectedColor: RgbaColor, shapeInfo: ShapeInfo) => {
    setSelectedShape(shapeInfo);
    setSelectedColor(selectedColor);
  };

  const handleColorChange = (color: RgbaColor) => {
    if (!selectedShape || !selectedLayer || !lottieJSON) {
      return;
    }

    console.log('New Color: ', color);
    // TODO: Handle color change here
  };

  const renderColorItems = () => {
    let layersToShow = selectedLayer ? [selectedLayer] : lottieDp;

    return layersToShow.map(({ shapes }) => {
      return shapes.map((shapeInfo) => (
        <SelectableColorItem
          onSelect={(selectedColor) => {
            handleColorSelect(selectedColor, shapeInfo);
          }}
          color={RGBToHex(shapeInfo.color)}
        />
      ));
    });
  };

  return (
    <div>
      <Typography color='neutral' level='h4'>
        Colors
      </Typography>
      <Box
        sx={{
          padding: 4,
          paddingTop: 2,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <RadioGroup
          aria-labelledby='product-color-attribute'
          defaultValue='warning'
          sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
        >
          {renderColorItems()}
        </RadioGroup>
      </Box>
      <Box padding={4}>
        {selectedColor && <RgbaColorPicker color={selectedColor} onChange={handleColorChange} />}
      </Box>
    </div>
  );
};
