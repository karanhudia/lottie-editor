import { useCallback, useRef } from 'react';

export const useUpdateQueue = () => {
  const updateQueue = useRef<(() => Promise<void>)[]>([]);
  const processingQueue = useRef(false);

  const processQueue = useCallback(async () => {
    if (processingQueue.current || updateQueue.current.length === 0) return;

    processingQueue.current = true;
    const task = updateQueue.current.shift();

    if (task) {
      await task();
    }

    processingQueue.current = false;
    if (updateQueue.current.length > 0) {
      void processQueue();
    }
  }, []);

  const queueUpdate = useCallback(
    (updateTask: () => Promise<void>) => {
      updateQueue.current.push(updateTask);
      void processQueue();
    },
    [processQueue],
  );

  return { queueUpdate, processQueue, updateQueue };
};
