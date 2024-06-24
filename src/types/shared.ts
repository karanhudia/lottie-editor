import { RgbaColor } from 'react-colorful';

export type SelectedColor = {
  nestedLayerSeq: number[];
  shapeSeq: number;
  shapeItemSeq: number;
  color: RgbaColor;
};

export type ShapeInfo = {
  shapeName: string;
  shapeSeq: number;
  shapeItemSeq: number;
  color: number[];
};

export type LayerInfo = {
  nestedLayerSeq: number[]; // Sequence indices for nested layers
  layerName: string;
  shapes: ShapeInfo[];
};
