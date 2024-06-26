import { useLottieAnimation } from './useLottieAnimation';
import { act, renderHook } from '@testing-library/react';
import { useSharedProps } from '../context/SharedPropsContext';
import { deleteLottieLayer, updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { aLottieAnimation } from '../graphql/lottie-server/generated';
import { mockSharedContextProps } from '../test/mocks/mockSharedContextProps';
import mocked = jest.mocked;

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
  beforeEach(() => {
    // Mock return values before each test case
    mocked(useSharedProps).mockReturnValue(mockSharedContextProps);
  });

  it('should import Lottie animation', async () => {
    const updateJSONMock = jest.fn().mockResolvedValue({ code: 200 });

    // require('./useSocket').useSocket.mockReturnValue({ updateJSON: updateJSONMock });

    const { result } = renderHook(() => useLottieAnimation());

    act(() => {
      result.current.importLottie(aLottieAnimation());
    });

    expect(mockSharedContextProps.lottieJSON).toStrictEqual(aLottieAnimation());
    expect(mockSharedContextProps.setLottieJSON).toHaveBeenCalledWith(aLottieAnimation());
    expect(mockSharedContextProps.setIsAnimationCreated).toHaveBeenCalledWith(true);
    expect(mockNavigate).toHaveBeenCalledWith('edit/sample-uuid');
  });

  it('should update speed', () => {
    const { result } = renderHook(() => useLottieAnimation());
    const newSpeed = 60;

    act(() => {
      result.current.updateSpeed(newSpeed);
    });

    expect(mockSharedContextProps.setLottieJSON).toHaveBeenCalledWith(
      updateLottieSpeed(aLottieAnimation(), newSpeed),
    );
  });

  it('should update color', () => {
    const { result } = renderHook(() => useLottieAnimation());
    const nestedLayerSeq = [0, 0];
    const shapeSeq = 0;
    const shapeItemSeq = 0;
    const newColor = { r: 100, g: 110, b: 120, a: 1 };

    act(() => {
      result.current.updateColor(nestedLayerSeq, shapeSeq, shapeItemSeq, newColor);
    });

    expect(mockSharedContextProps.setLottieJSON).toHaveBeenCalledWith(
      updateLottieColor(aLottieAnimation(), nestedLayerSeq, shapeSeq, shapeItemSeq, newColor),
    );
  });

  it('should delete layer', () => {
    const { result } = renderHook(() => useLottieAnimation());
    const layerSeq = [0, 0];

    act(() => {
      result.current.deleteLayer(layerSeq);
    });

    expect(mockSharedContextProps.setLottieJSON).toHaveBeenCalledWith(
      deleteLottieLayer(aLottieAnimation(), layerSeq),
    );
  });
});
