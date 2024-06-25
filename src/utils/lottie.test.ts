import {
  deleteLottieLayer,
  getAnimationLayersInfo,
  updateLottieColor,
  updateLottieSpeed,
} from './lottie';
import { LottieAnimation } from '../graphql/lottie-server/generated';
import { mockLottieAnimation } from '../test/mocks/mockLottieAnimation';

describe('Test lottie utils', () => {
  describe('getAnimationLayersInfo', () => {
    it('should return an empty array if lottieAnimation is null', () => {
      const result = getAnimationLayersInfo(null);
      expect(result).toEqual([]);
    });

    it('should return an empty array if layers are empty', () => {
      const result = getAnimationLayersInfo({
        layers: [],
      });

      expect(result).toEqual([]);
    });

    it('should return correct layer info for a single layer with shapes', () => {
      const lottieAnimation: LottieAnimation = {
        layers: [
          {
            nm: 'Layer 1',
            shapes: [
              {
                nm: 'Shape 1',
                it: [
                  {
                    c: { k: [1, 0, 0, 1] },
                  },
                ],
              },
            ],
          },
        ],
      };

      const result = getAnimationLayersInfo(lottieAnimation);

      expect(result).toEqual([
        {
          layerSeq: 0,
          nestedLayerSeq: [0],
          layerName: 'Layer 1',
          shapes: [
            {
              shapeName: 'Shape 1',
              shapeSeq: 0,
              shapeItemSeq: 0,
              color: [1, 0, 0, 1],
            },
          ],
        },
      ]);
    });

    it('should handle nested layers correctly', () => {
      const lottieAnimation: LottieAnimation = {
        layers: [
          {
            nm: 'Layer 1',
            layers: [
              {
                nm: 'Nested Layer 1',
                shapes: [
                  {
                    nm: 'Shape 1',
                    it: [
                      {
                        c: { k: [0, 1, 0, 1] },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };

      const result = getAnimationLayersInfo(lottieAnimation);

      expect(result).toEqual([
        {
          layerName: 'Layer 1',
          layerSeq: 0,
          layers: [
            {
              layerName: 'Nested Layer 1',
              layerSeq: 1,
              nestedLayerSeq: [0, 0],
              shapes: [
                {
                  color: [0, 1, 0, 1],
                  shapeItemSeq: 0,
                  shapeName: 'Shape 1',
                  shapeSeq: 0,
                },
              ],
            },
          ],
          nestedLayerSeq: [0],
          shapes: [],
        },
      ]);
    });

    it('should return all layers (including nested)  inside the animation', () => {
      const result = getAnimationLayersInfo(mockLottieAnimation);

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
        mockLottieAnimation,
        nestedLayerSeq,
        shapeSeq,
        shapeItemSeq,
        newColor,
      );

      expect(
        updatedAnimation.layers[nestedLayerSeq[0]].layers[nestedLayerSeq[1]].shapes[shapeSeq].it[
          shapeItemSeq
        ].c.k,
      ).toEqual([0.39, 0.43, 0.47, 1]);
    });

    it('should handle invalid nested layer sequence gracefully', () => {
      const nestedLayerSeq = [0, 1];
      const shapeSeq = 0;
      const shapeItemSeq = 0;

      const updatedAnimation = updateLottieColor(
        mockLottieAnimation,
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

      const updatedAnimation = updateLottieSpeed(mockLottieAnimation, newFrameRate);

      expect(updatedAnimation.fr).toEqual(newFrameRate);
    });

    it('should not modify the original animation object', () => {
      const originalAnimation = { ...mockLottieAnimation };
      const newFrameRate = 80;

      updateLottieSpeed(mockLottieAnimation, newFrameRate);

      expect(originalAnimation.fr).toEqual(30);
    });
  });

  describe('deleteLottieLayer', () => {
    it('should delete the specified nested layer', () => {
      const nestedLayerSeq = [2, 0];

      const updatedAnimation = deleteLottieLayer(mockLottieAnimation, nestedLayerSeq);

      expect(updatedAnimation.layers[nestedLayerSeq[0]].layers).toHaveLength(2);
    });

    it('should handle invalid nested layer sequence gracefully', () => {
      const nestedLayerSeq = [0, 1];

      const updatedAnimation = deleteLottieLayer(mockLottieAnimation, nestedLayerSeq);

      expect(updatedAnimation).toEqual(mockLottieAnimation);
    });
  });
});
