import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { NetworkStateContext, SaveState, useNetworkState } from './NetworkStateContext';
import { useSharedProps } from './SharedPropsContext';
import { mockSharedContextProps } from '../test/mocks/mockSharedContextProps';
import mocked = jest.mocked;

// Mock useSharedProps
jest.mock('./SharedPropsContext', () => ({
  useSharedProps: jest.fn(),
}));

describe('NetworkStateContext', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
    // Mock return values before each test case
    mocked(useSharedProps).mockReturnValue(mockSharedContextProps);
  });

  it('provides default values', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <NetworkStateContext>{children}</NetworkStateContext>
    );
    const { result } = renderHook(() => useNetworkState(), { wrapper });

    expect(result.current.isSaving).toBe(false);
    expect(result.current.isConnected).toBe(false);
    expect(result.current.addToSaveQueue).toBeDefined();
    expect(result.current.removeFromSaveQueue).toBeDefined();
  });

  it('updates isSaving state correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <NetworkStateContext>{children}</NetworkStateContext>
    );
    const { result } = renderHook(() => useNetworkState(), { wrapper });

    act(() => {
      result.current.addToSaveQueue(SaveState.LayerDelete);
    });

    expect(result.current.isSaving).toBe(true);

    act(() => {
      result.current.removeFromSaveQueue(SaveState.LayerDelete);
    });

    expect(result.current.isSaving).toBe(false);
  });

  it('does not throw error when used within NetworkStateContext', () => {
    const { result } = renderHook(() => useNetworkState(), { wrapper: NetworkStateContext });

    expect(result.current.isConnected).toBe(false);
  });
});
