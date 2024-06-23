import { RgbaColor } from 'react-colorful';
import { rgbaToLottieColor } from './color';
import { Layer, LottieAnimation } from '../graphql/lottie-server/generated';
import { LayerInfo } from '../types/shared';

const getLayerInfo = (layer: Layer | null): Omit<LayerInfo, 'layerSeq'> | undefined => {
  if (!layer?.nm) {
    return;
  }

  const info: Omit<LayerInfo, 'layerSeq'> = {
    layerName: layer.nm,
    shapes: [],
  };

  if (layer.shapes) {
    for (let i = 0; i < layer.shapes.length; i++) {
      const shapeItems = layer.shapes[i]?.it;

      if (shapeItems) {
        for (let j = 0; j < shapeItems.length; j++) {
          if (shapeItems[j]?.c?.k) {
            info.shapes.push({
              shapeSeq: i,
              shapeItemSeq: j,
              color: shapeItems[j]?.c?.k ?? [],
            });
          }
        }
      }
    }
  }

  if (info.shapes.length === 0) {
    return;
  }

  return info;
};

export const getAnimationLayersInfo = (lottieAnimation: LottieAnimation | null): LayerInfo[] => {
  if (!lottieAnimation) {
    return [];
  }

  const dp: LayerInfo[] = [];
  const layers = lottieAnimation.layers;

  for (let i = 0; i < layers.length; i++) {
    const layerInfo = getLayerInfo(layers[i]);

    if (layerInfo) {
      dp.push({
        ...layerInfo,
        layerSeq: i,
      });
    }
  }

  return dp;
};

export const updateLottieColor = (
  obj: LottieAnimation,
  layerSeq: number,
  shapeSeq: number,
  shapeItemSeq: number,
  value: RgbaColor,
) => {
  const newObj = { ...obj };

  if (newObj.layers[layerSeq]?.shapes?.[shapeSeq]?.it?.[shapeItemSeq]?.c) {
    newObj.layers[layerSeq].shapes[shapeSeq].it[shapeItemSeq].c.k = rgbaToLottieColor(value);
  } else {
    console.error('Invalid path provided.');
  }

  return newObj;
};

export const updateLottieSpeed = (obj: LottieAnimation, frameRate: number) => {
  return {
    ...obj,
    fr: frameRate,
  };
};
