import { useRef, useEffect, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useThrottle<T extends (...args: any[]) => void>(
  callback: T,
  limit: number,
): (...args: Parameters<T>) => void {
  const lastArgs = useRef<Parameters<T> | null>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const throttledFunction = useCallback(
    (...args: Parameters<T>) => {
      lastArgs.current = args;

      if (!timeout.current) {
        timeout.current = setTimeout(() => {
          if (lastArgs.current) {
            callback(...lastArgs.current);
            timeout.current = null;
            lastArgs.current = null;
          }
        }, limit);
      }
    },
    [callback, limit],
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return throttledFunction;
}
