import {
  deleteLottieLayer,
  getAnimationLayersInfo,
  updateLottieColor,
  updateLottieSpeed,
} from './lottie';
import { aLayer, aLottieAnimation, LottieAnimation } from '../graphql/lottie-server/generated';
import { mockLottieAnimation } from '../test/mocks/mockLottieAnimation';

describe('Test lottie utils', () => {
  describe('getAnimationLayersInfo', () => {
    it('should return an empty array if lottieAnimation is null', () => {
      const result = getAnimationLayersInfo(null);
      expect(result).toEqual([]);
    });

    it('should return an empty array if layers are empty', () => {
      const result = getAnimationLayersInfo({ ...aLottieAnimation(), layers: [] });

      expect(result).toEqual([]);
    });

    it('should return correct layer info for a single layer with shapes', () => {
      const lottieAnimation: LottieAnimation = {
        ...aLottieAnimation(),
        layers: [aLayer()],
      };

      const result = getAnimationLayersInfo(lottieAnimation);

      expect(result).toEqual([
        {
          layerName: 'sed',
          layerSeq: 0,
          layers: [
            {
              layerSeq: 1,
              nestedLayerSeq: [0, 0],
              shapes: [],
            },
          ],
          nestedLayerSeq: [0],
          shapes: [
            {
              color: [7061],
              shapeItemSeq: 0,
              shapeName: 'vel',
              shapeSeq: 0,
            },
          ],
        },
      ]);
    });

    it('should handle nested layers correctly', () => {
      const lottieAnimation: LottieAnimation = {
        ...aLottieAnimation(),
        layers: [
          {
            ...aLayer(),
            layers: [aLayer()],
          },
        ],
      };

      const result = getAnimationLayersInfo(lottieAnimation);

      expect(result).toEqual([
        {
          layerName: 'sed',
          layerSeq: 0,
          layers: [
            {
              layerName: 'sed',
              layerSeq: 1,
              layers: [
                {
                  layerSeq: 2,
                  nestedLayerSeq: [0, 0, 0],
                  shapes: [],
                },
              ],
              nestedLayerSeq: [0, 0],
              shapes: [
                {
                  color: [7061],
                  shapeItemSeq: 0,
                  shapeName: 'vel',
                  shapeSeq: 0,
                },
              ],
            },
          ],
          nestedLayerSeq: [0],
          shapes: [
            {
              color: [7061],
              shapeItemSeq: 0,
              shapeName: 'vel',
              shapeSeq: 0,
            },
          ],
        },
      ]);
    });

    it('should return all layers (including nested)  inside the animation', () => {
      const result = getAnimationLayersInfo(mockLottieAnimation as unknown as LottieAnimation);

      const allLayers = result.map((layer) => layer.layerName);
      expect(allLayers).toStrictEqual([
        'character Outlines',
        'character',
        'leg 1',
        'air1',
        'air 2',
        'air3',
        'cycle',
        'leg 2',
        'arm',
        '2 tyre',
        '1 tyre',
        'social media icons',
      ]);

      const nestedLayers = result[2].layers?.map((layer) => layer.layerName);

      expect(nestedLayers).toStrictEqual(['L 1 Outlines', 'L 2', 'pedal rod']);
    });
  });

  describe('updateLottieColor', () => {
    const newColor = { r: 100, g: 110, b: 120, a: 1 };

    it('should update the color of the specified shape item', () => {
      const nestedLayerSeq = [2, 0];
      const shapeSeq = 0;
      const shapeItemSeq = 1;

      const updatedAnimation = updateLottieColor(
        mockLottieAnimation as unknown as LottieAnimation,
        nestedLayerSeq,
        shapeSeq,
        shapeItemSeq,
        newColor,
      );

      expect(
        updatedAnimation.layers[nestedLayerSeq?.[0]].layers?.[nestedLayerSeq?.[1]]?.shapes?.[
          shapeSeq
        ]?.it?.[shapeItemSeq]?.c?.k,
      ).toEqual([0.39, 0.43, 0.47, 1]);
    });

    it('should handle invalid nested layer sequence gracefully', () => {
      const nestedLayerSeq = [0, 1];
      const shapeSeq = 0;
      const shapeItemSeq = 0;

      const updatedAnimation = updateLottieColor(
        mockLottieAnimation as unknown as LottieAnimation,
        nestedLayerSeq,
        shapeSeq,
        shapeItemSeq,
        newColor,
      );

      expect(updatedAnimation).toEqual(mockLottieAnimation);
    });
  });

  describe('updateLottieSpeed', () => {
    it('should update the frame rate of the animation', () => {
      const newFrameRate = 80;

      const updatedAnimation = updateLottieSpeed(
        mockLottieAnimation as unknown as LottieAnimation,
        newFrameRate,
      );

      expect(updatedAnimation.fr).toEqual(newFrameRate);
    });

    it('should not modify the original animation object', () => {
      const originalAnimation = { ...mockLottieAnimation };
      const newFrameRate = 80;

      updateLottieSpeed(mockLottieAnimation as unknown as LottieAnimation, newFrameRate);

      expect(originalAnimation.fr).toEqual(30);
    });
  });

  describe('deleteLottieLayer', () => {
    it('should delete the specified nested layer', () => {
      const nestedLayerSeq = [2, 0];

      const updatedAnimation = deleteLottieLayer(
        mockLottieAnimation as unknown as LottieAnimation,
        nestedLayerSeq,
      );

      expect(updatedAnimation.layers[nestedLayerSeq[0]].layers).toHaveLength(2);
    });

    it('should handle invalid nested layer sequence gracefully', () => {
      const nestedLayerSeq = [0, 1];

      const updatedAnimation = deleteLottieLayer(
        mockLottieAnimation as unknown as LottieAnimation,
        nestedLayerSeq,
      );

      expect(updatedAnimation).toEqual(mockLottieAnimation);
    });
  });
});
