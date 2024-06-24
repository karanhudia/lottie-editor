import { RgbaColor } from 'react-colorful';
import { rgbaToLottieColor } from './color';
import { Layer, LottieAnimation } from '../graphql/lottie-server/generated';
import { LayerInfo, ShapeInfo } from '../types/shared';

const collectShapesInfo = (layer: Layer, shapeInfos: ShapeInfo[]): void => {
  if (layer.shapes) {
    for (let i = 0; i < layer.shapes.length; i++) {
      const shapeItems = layer.shapes[i]?.it;
      if (shapeItems) {
        for (let j = 0; j < shapeItems.length; j++) {
          if (shapeItems[j]?.c?.k) {
            shapeInfos.push({
              shapeName: layer.shapes[i]?.nm ?? 'Custom Shape',
              shapeSeq: i,
              shapeItemSeq: j,
              color: shapeItems[j]?.c?.k ?? [],
            });
          }
        }
      }
    }
  }
};

const processLayers = (
  layers: Layer[],
  baseLayerSeq: number,
  nestedLayerSeq: number[],
  layerSeqOffset: number,
): LayerInfo[] => {
  const layerInfos: LayerInfo[] = [];
  for (let i = 0; i < layers.length; i++) {
    const currentNestedLayerSeq = [...nestedLayerSeq, i];
    const layer = layers[i];
    const shapeInfos: ShapeInfo[] = [];

    if (layer.shapes) {
      // This layer has shapes, collect shapes info
      collectShapesInfo(layer, shapeInfos);
    }

    const nestedLayerInfos = layer.layers
      ? processLayers(layer.layers, baseLayerSeq + i + 1, currentNestedLayerSeq, layerSeqOffset)
      : [];

    layerInfos.push({
      layerSeq: baseLayerSeq + i + layerSeqOffset,
      nestedLayerSeq: currentNestedLayerSeq,
      layerName: layer.nm,
      shapes: shapeInfos,
      layers: nestedLayerInfos.length > 0 ? nestedLayerInfos : undefined,
    });
  }

  return layerInfos;
};

export const getAnimationLayersInfo = (lottieAnimation: LottieAnimation | null): LayerInfo[] => {
  if (!lottieAnimation) {
    return [];
  }

  return processLayers(lottieAnimation.layers, 0, [], 0);
};

export const updateLottieColor = (
  obj: LottieAnimation,
  nestedLayerSeq: number[],
  shapeSeq: number,
  shapeItemSeq: number,
  value: RgbaColor,
) => {
  const newObj = { ...obj };

  let layer: Layer | null | undefined = newObj.layers[nestedLayerSeq[0]];

  let i = 1;
  while (i < nestedLayerSeq.length && layer) {
    layer = layer.layers?.[nestedLayerSeq[i]];

    if (!layer) {
      console.error(`Invalid nested layer sequence at index ${i}`);

      return obj;
    }
    i++;
  }

  if (layer?.shapes?.[shapeSeq]?.it?.[shapeItemSeq]?.c) {
    layer.shapes[shapeSeq].it[shapeItemSeq].c.k = rgbaToLottieColor(value);
  } else {
    console.error('Invalid path provided or shape item not found.');
  }

  return newObj;
};

export const updateLottieSpeed = (obj: LottieAnimation, frameRate: number) => {
  return {
    ...obj,
    fr: frameRate,
  };
};

export const deleteLottieLayer = (obj: LottieAnimation, layerSeq: number[]) => {
  const newObj = { ...obj };
  let layer: Layer | undefined = newObj.layers[layerSeq[0]];

  if (!layer) {
    console.error('Layer not found to delete');
    return obj;
  }
  // Check if nested layers exist and the specific layer exists
  let i = 1;
  while (i < layerSeq.length - 1) {
    if (layer?.layers?.[layerSeq[i]]) {
      layer = layer.layers[layerSeq[i]];
    } else {
      console.error('Layer not found to delete');
      return obj;
    }
  }

  // Check if the target layer to delete exists
  const targetIndex = layerSeq[layerSeq.length - 1];
  if (layer.layers && layer.layers[targetIndex]) {
    layer.layers.splice(targetIndex, 1);
  } else {
    console.error('Layer not found to delete');
    return obj;
  }

  return newObj;
};
