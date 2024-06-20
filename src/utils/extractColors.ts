import { Layer, LottieAnimation } from '../types/LottieAnimation';

type Color = {
  layer: string;
  color: string[];
};

const RGBToHex = ([r, g, b]: number[]): string => {
  const newR = Math.round(r * 255)
    .toString(16)
    .padStart(2, '0');
  const newG = Math.round(g * 255)
    .toString(16)
    .padStart(2, '0');
  const newB = Math.round(b * 255)
    .toString(16)
    .padStart(2, '0');

  return '#' + newR + newG + newB;
};

export const extractColorsFromLayer = (layer: Layer | null): Color | undefined => {
  if (!layer) {
    return;
  }

  const color: Color = {
    layer: layer.nm,
    color: [],
  };

  if (layer.shapes) {
    for (const shape of layer.shapes) {
      if (shape.it) {
        for (const shapeItem of shape.it) {
          if (shapeItem.c) {
            color.color.push(RGBToHex(shapeItem.c.k));
          }
        }
      }
    }
  }

  return color;
};

export const extractColorsFromAnimation = (lottieAnimation: LottieAnimation | null): Color[] => {
  if (!lottieAnimation) {
    return [];
  }

  const colors: Color[] = [];
  const layers = lottieAnimation.layers;

  for (const layer of layers) {
    const color = extractColorsFromLayer(layer);

    if (color) {
      colors.push(color);
    }
  }

  return colors;
};
