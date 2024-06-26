import React, { ReactNode, useMemo } from 'react';
import { SelectableColorItem } from './SelectableColorItem';
import { lottieColorToRgba } from '../utils/color';
import { LayerInfo, ShapeInfo } from '../types/shared';
import { RgbaColor } from 'react-colorful';
import { ColorPayload } from '../graphql/lottie-server/generated';

type ColorItemsProps = {
  allLayers: LayerInfo[];
  selectedColor: ColorPayload | null;
  handleColorSelect: (
    selectedColor: RgbaColor,
    shapeInfo: ShapeInfo,
    nestedLayerSeq: number[],
  ) => void;
};

export const ColorItems = ({ allLayers, selectedColor, handleColorSelect }: ColorItemsProps) => {
  const selectableColorItems = useMemo(() => {
    let items: ReactNode[] = [];

    allLayers.forEach(({ shapes, nestedLayerSeq, layers }, index) => {
      if (layers) {
        items = items.concat(
          <ColorItems
            allLayers={layers}
            handleColorSelect={handleColorSelect}
            selectedColor={selectedColor}
            key={index}
          />,
        );
      }

      shapes.forEach((shapeInfo) => {
        const uniqueId = `nestedLayer-${nestedLayerSeq.join()},shape-${String(shapeInfo.shapeSeq)},shapeItem-${String(shapeInfo.shapeItemSeq)}`;

        const selectedId = selectedColor
          ? `nestedLayer-${selectedColor.layer.join()},shape-${String(selectedColor.shape)},shapeItem-${String(selectedColor.shapeItem)}`
          : null;

        items.push(
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

    return items;
  }, [allLayers, selectedColor, handleColorSelect]);

  return <>{selectableColorItems}</>;
};
