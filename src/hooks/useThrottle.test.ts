import { renderHook, act } from '@testing-library/react';
import { useThrottle } from './useThrottle';

// Mocking the timer functions for controlled testing
jest.useFakeTimers();

describe('useThrottle', () => {
  it('should throttle function calls', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottle(callback, 100));

    // Call the throttled function multiple times quickly
    act(() => {
      result.current('first');
      result.current('second');
      result.current('third');
    });

    // Fast-forward time by 100ms
    jest.advanceTimersByTime(100);

    // The callback should only be called once with the last arguments
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('third');
  });

  it('should pass arguments to the throttled function', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottle(callback, 100));

    act(() => {
      result.current('test', 123);
    });

    jest.advanceTimersByTime(100);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test', 123);
  });

  it('should clear timeout on unmount', () => {
    const callback = jest.fn();
    const { result, unmount } = renderHook(() => useThrottle(callback, 100));

    act(() => {
      result.current('test');
    });

    // Unmount the component
    unmount();

    // Fast-forward time by 100ms
    jest.advanceTimersByTime(100);

    // Ensure callback is not called after unmount
    expect(callback).not.toHaveBeenCalled();
  });
});
