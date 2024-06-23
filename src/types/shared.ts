import { RgbaColor } from 'react-colorful';

export type SelectedColor = {
  layerSeq: number;
  shapeSeq: number;
  shapeItemSeq: number;
  color: RgbaColor;
};

export type ShapeInfo = {
  shapeSeq: number;
  shapeItemSeq: number;
  color: number[];
};

export type LayerInfo = {
  layerSeq: number;
  layerName: string;
  shapes: ShapeInfo[];
};
