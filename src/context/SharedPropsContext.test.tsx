import React, { createRef } from 'react';
import { act, renderHook } from '@testing-library/react';
import { SharedPropsContext, useSharedProps } from './SharedPropsContext';
import { LayerInfo, SelectedColor } from '../types/shared';
import { mockLottieAnimation } from '../test/mocks/mockLottieAnimation';
import { getAnimationLayersInfo } from '../utils/lottie';
import clearAllMocks = jest.clearAllMocks;

const mockLayerInfo: LayerInfo = getAnimationLayersInfo(mockLottieAnimation)[0];

const mockSelectedColor: SelectedColor = {
  nestedLayerSeq: [0],
  shapeSeq: 0,
  shapeItemSeq: 0,
  color: { r: 255, g: 0, b: 0, a: 1 },
};

describe('SharedPropsContext', () => {
  beforeEach(() => {
    clearAllMocks();
  });

  it('provides default values', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SharedPropsContext>{children}</SharedPropsContext>
    );

    const { result } = renderHook(() => useSharedProps(), { wrapper });

    expect(result.current.lottiePlayerRef).toBe(null);
    expect(result.current.lottieJSON).toBe(null);
    expect(result.current.selectedLayer).toBe(null);
    expect(result.current.selectedColor).toBe(null);
    expect(result.current.isAnimationCreated).toBe(false);
  });

  it('sets values correctly through the context', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SharedPropsContext>{children}</SharedPropsContext>
    );

    const mockLottiePlayerRef = createRef();

    const { result } = renderHook(() => useSharedProps(), { wrapper });

    act(() => {
      result.current.setLottiePlayerRef(mockLottiePlayerRef);
      result.current.setLottieJSON(mockLottieAnimation);
      result.current.updateLayer(mockLayerInfo);
      result.current.setSelectedColor(mockSelectedColor);
      result.current.setIsAnimationCreated(true);
    });

    expect(result.current.lottiePlayerRef).toBe(mockLottiePlayerRef);
    expect(result.current.lottieJSON).toBe(mockLottieAnimation);
    expect(result.current.selectedLayer).toBe(mockLayerInfo);
    expect(result.current.selectedColor).toBe(mockSelectedColor);
    expect(result.current.isAnimationCreated).toBe(true);
  });

  it('does not throw error when used within SharedPropsContext', () => {
    // Render useSharedProps within the mock context provider
    const { result } = renderHook(() => useSharedProps(), { wrapper: SharedPropsContext });

    // Accessing values from result.current should not throw an error
    expect(result.current.lottiePlayerRef).toBe(null);
    expect(result.current.lottieJSON).toBe(null);
    expect(result.current.selectedLayer).toBe(null);
    expect(result.current.selectedColor).toBe(null);
    expect(result.current.isAnimationCreated).toBe(false);
  });
});
