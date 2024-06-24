import React, { ReactNode } from 'react';
import { SelectableColorItem } from './SelectableColorItem';
import { lottieColorToRgba } from '../utils/color';
import { LayerInfo, SelectedColor, ShapeInfo } from '../types/shared';
import { RgbaColor } from 'react-colorful';

type ColorItemsProps = {
  allLayers: LayerInfo[];
  selectedColor: SelectedColor | null;
  handleColorSelect: (
    selectedColor: RgbaColor,
    shapeInfo: ShapeInfo,
    nestedLayerSeq: number[],
  ) => void;
};

export const ColorItems = ({ allLayers, selectedColor, handleColorSelect }: ColorItemsProps) => {
  let selectableColorItems: ReactNode[] = [];

  allLayers.forEach(({ shapes, nestedLayerSeq, layers }, index) => {
    if (layers) {
      selectableColorItems = selectableColorItems.concat(
        <ColorItems
          allLayers={layers}
          handleColorSelect={handleColorSelect}
          selectedColor={selectedColor}
          key={index}
        />,
      );
    }

    shapes.forEach((shapeInfo) => {
      const uniqueId = `nestedLayer-${nestedLayerSeq.join()},shape-${shapeInfo.shapeSeq},shapeItem-${shapeInfo.shapeItemSeq}`;

      const selectedId = selectedColor
        ? `nestedLayer-${selectedColor.nestedLayerSeq.join()},shape-${selectedColor.shapeSeq},shapeItem-${selectedColor.shapeItemSeq}`
        : null;

      selectableColorItems.push(
        <SelectableColorItem
          key={uniqueId}
          id={uniqueId}
          selected={selectedId === uniqueId}
          color={lottieColorToRgba(shapeInfo.color)}
          onSelect={(selectedColor) => {
            handleColorSelect(selectedColor, shapeInfo, nestedLayerSeq);
          }}
        />,
      );
    });
  });

  return selectableColorItems;
};
