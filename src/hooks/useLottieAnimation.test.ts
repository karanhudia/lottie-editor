import { mockLottieAnimation } from '../test/mocks/mockLottieAnimation';
import { useLottieAnimation } from './useLottieAnimation';
import { act, renderHook } from '@testing-library/react';
import { useSharedProps } from '../context/SharedPropsContext';
import { deleteLottieLayer, updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { useSocket } from './useSocket';
import mocked = jest.mocked;

// Mock and define useSocket hook
jest.mock('./useSocket', () => ({
  useSocket: jest.fn().mockReturnValue({
    updateJSON: jest.fn(),
  }),
}));

// Mock and define useSharedProps hook
jest.mock('../context/SharedPropsContext', () => ({
  useSharedProps: jest.fn(),
}));

// Mock and define return value
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useParams: () => ({
    editId: 'sample-uuid',
  }),
}));

// Mock and define return value
jest.mock('uuid', () => ({
  v4: () => 'sample-uuid',
}));

describe('useLottieAnimation', () => {
  const SharedContextProps = {
    lottieJSON: mockLottieAnimation,
    setLottieJSON: jest.fn(),
    setIsAnimationCreated: jest.fn(),
  };

  beforeEach(() => {
    // Mock return values before each test case
    mocked(useSharedProps).mockReturnValue(SharedContextProps);
    mocked(useSocket).mockReturnValue({
      updateJSON: jest.fn().mockResolvedValue({
        code: 200,
        status: 'ok',
      }),
    });
  });

  it('should import Lottie animation', async () => {
    const updateJSONMock = jest.fn().mockResolvedValue({ code: 200 });

    require('./useSocket').useSocket.mockReturnValue({ updateJSON: updateJSONMock });

    const { result } = renderHook(() => useLottieAnimation());

    act(() => {
      result.current.importLottie(mockLottieAnimation);
    });

    expect(SharedContextProps.lottieJSON).toStrictEqual(mockLottieAnimation);
    expect(SharedContextProps.setLottieJSON).toHaveBeenCalledWith(mockLottieAnimation);
    expect(SharedContextProps.setIsAnimationCreated).toHaveBeenCalledWith(true);
    expect(mockNavigate).toHaveBeenCalledWith('edit/sample-uuid');
  });

  it('should update speed', () => {
    const { result } = renderHook(() => useLottieAnimation());
    const newSpeed = 60;

    act(() => {
      result.current.updateSpeed(newSpeed);
    });

    expect(SharedContextProps.setLottieJSON).toHaveBeenCalledWith(
      updateLottieSpeed(mockLottieAnimation, newSpeed),
    );
  });

  it('should update color', () => {
    const { result } = renderHook(() => useLottieAnimation());
    const nestedLayerSeq = [2, 0];
    const shapeSeq = 0;
    const shapeItemSeq = 1;
    const newColor = { r: 100, g: 110, b: 120, a: 1 };

    act(() => {
      result.current.updateColor(nestedLayerSeq, shapeSeq, shapeItemSeq, newColor);
    });

    expect(SharedContextProps.setLottieJSON).toHaveBeenCalledWith(
      updateLottieColor(mockLottieAnimation, nestedLayerSeq, shapeSeq, shapeItemSeq, newColor),
    );
  });

  it('should delete layer', () => {
    const { result } = renderHook(() => useLottieAnimation());
    const layerSeq = [2, 0];

    act(() => {
      result.current.deleteLayer(layerSeq);
    });

    expect(SharedContextProps.setLottieJSON).toHaveBeenCalledWith(
      deleteLottieLayer(mockLottieAnimation, layerSeq),
    );
  });
});
