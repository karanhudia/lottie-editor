import { RgbaColor } from 'react-colorful';
import { rgbaToLottieColor } from './color';
import { Layer, LottieAnimation } from '../graphql/lottie-server/generated';
import { LayerInfo } from '../types/shared';

const getLayerInfo = (
  layer: Layer | null,
  layerSeq: number,
  nestedLayerSeq: number[],
): Omit<LayerInfo, 'layerSeq' | 'nestedLayerSeq'> | undefined => {
  if (!layer?.nm) {
    return;
  }

  const info: Omit<LayerInfo, 'layerSeq' | 'nestedLayerSeq'> = {
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

  if (layer.layers) {
    for (let i = 0; i < layer.layers.length; i++) {
      const newNestedLayerSeq = [...nestedLayerSeq, i];
      const nestedLayerInfo = getLayerInfo(layer.layers[i], layerSeq, newNestedLayerSeq);
      if (nestedLayerInfo) {
        info.shapes = info.shapes.concat(nestedLayerInfo.shapes);
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

  const processLayers = (layers: Layer[], baseLayerSeq: number, nestedLayerSeq: number[]) => {
    for (let i = 0; i < layers.length; i++) {
      const newNestedLayerSeq = [...nestedLayerSeq, i];
      const layerInfo = getLayerInfo(layers[i], baseLayerSeq + i, newNestedLayerSeq);

      if (layerInfo) {
        dp.push({
          ...layerInfo,
          nestedLayerSeq: newNestedLayerSeq,
        });

        if (layers[i].layers) {
          processLayers(layers[i]?.layers ?? [], baseLayerSeq + i + 1, newNestedLayerSeq);
        }
      }
    }
  };

  processLayers(layers, 0, []);

  return dp;
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
