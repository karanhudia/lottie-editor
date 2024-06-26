import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { SharedPropsContext, useSharedProps } from './SharedPropsContext';
import { aColorPayload, aLottieAnimation } from '../graphql/lottie-server/generated';
import { mockSelectedLayer } from '../test/mocks/mockSharedContextProps';
import clearAllMocks = jest.clearAllMocks;

describe('SharedPropsContext', () => {
  beforeEach(() => {
    clearAllMocks();
  });

  it('provides default values', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SharedPropsContext>{children}</SharedPropsContext>
    );

    const { result } = renderHook(() => useSharedProps(), { wrapper });

    expect(result.current.lottieJSON).toBe(null);
    expect(result.current.selectedLayer).toBe(null);
    expect(result.current.selectedColor).toBe(null);
    expect(result.current.isAnimationCreated).toBe(false);
  });

  it('sets values correctly through the context', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SharedPropsContext>{children}</SharedPropsContext>
    );

    const { result } = renderHook(() => useSharedProps(), { wrapper });

    act(() => {
      result.current.setLottieJSON(aLottieAnimation());
      result.current.updateLayer(mockSelectedLayer);
      result.current.setSelectedColor(aColorPayload());
      result.current.setIsAnimationCreated(true);
    });

    expect(result.current.lottieJSON).toStrictEqual(aLottieAnimation());
    expect(result.current.selectedLayer).toStrictEqual(mockSelectedLayer);
    expect(result.current.selectedColor).toStrictEqual(aColorPayload());
    expect(result.current.isAnimationCreated).toStrictEqual(true);
  });

  it('does not throw error when used within SharedPropsContext', () => {
    // Render useSharedProps within the mock context provider
    const { result } = renderHook(() => useSharedProps(), { wrapper: SharedPropsContext });

    // Accessing values from result.current should not throw an error
    expect(result.current.lottieJSON).toBe(null);
    expect(result.current.selectedLayer).toBe(null);
    expect(result.current.selectedColor).toBe(null);
    expect(result.current.isAnimationCreated).toBe(false);
  });
});
