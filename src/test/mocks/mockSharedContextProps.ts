import { SharedContextProps } from '../../context/SharedPropsContext';
import { aColorPayload, aLottieAnimation } from '../../graphql/lottie-server/generated';
import { LayerInfo } from '../../types/shared';

export const mockSelectedLayer: LayerInfo = {
  layerSeq: 2,
  nestedLayerSeq: [2, 0],
  layerName: 'face',
  shapes: [{ shapeName: 'eyes', shapeSeq: 0, shapeItemSeq: 1, color: [1, 2, 3, 1] }],
  layers: [],
};
export const mockSetSelectedColor = jest.fn();

export const mockSharedContextProps: SharedContextProps = {
  lottieJSON: aLottieAnimation(),
  setLottieJSON: jest.fn(),
  selectedLayer: mockSelectedLayer,
  updateLayer: jest.fn(),
  selectedColor: aColorPayload(),
  setSelectedColor: mockSetSelectedColor,
  isAnimationCreated: false,
  setIsAnimationCreated: jest.fn(),
  isDrawerOpen: false,
  setIsDrawerOpen: jest.fn(),
  animationVersion: 1,
  updateAnimationVersion: jest.fn(),
};
