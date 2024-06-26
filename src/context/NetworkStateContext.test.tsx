import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { NetworkStateContext, SaveState, useNetworkState } from './NetworkStateContext';
import { useSharedProps } from './SharedPropsContext';

describe('NetworkStateContext', () => {
  it('provides initial context values', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <NetworkStateContext>{children}</NetworkStateContext>
    );
    const { result } = renderHook(() => useNetworkState(), { wrapper });

    expect(result.current.isSaving).toBe(false);
    expect(result.current.isConnected).toBe(false);
  });

  it('adds to the save queue and updates isSaving', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <NetworkStateContext>{children}</NetworkStateContext>
    );
    const { result } = renderHook(() => useNetworkState(), { wrapper });

    act(() => {
      result.current.addToSaveQueue(SaveState.LayerDelete);
    });

    expect(result.current.isSaving).toBe(true);
  });

  it('removes from the save queue and updates isSaving', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <NetworkStateContext>{children}</NetworkStateContext>
    );
    const { result } = renderHook(() => useNetworkState(), { wrapper });

    act(() => {
      result.current.addToSaveQueue(SaveState.LayerDelete);
    });

    act(() => {
      result.current.removeFromSaveQueue(SaveState.LayerDelete);
    });

    expect(result.current.isSaving).toBe(false);
  });

  it('handles network connection state', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <NetworkStateContext>{children}</NetworkStateContext>
    );
    const { result } = renderHook(() => useNetworkState(), { wrapper });

    act(() => {
      result.current.setConnection(true);
    });

    expect(result.current.isConnected).toBe(true);

    act(() => {
      result.current.setConnection(false);
    });

    expect(result.current.isConnected).toBe(false);
  });

  it('does not throw error when used within NetworkStateContext', () => {
    const { result } = renderHook(() => useSharedProps(), { wrapper: NetworkStateContext });

    // Accessing values from result.current should not throw an error
    expect(result.current.isUnsaved).toBe(false);
  });
});
