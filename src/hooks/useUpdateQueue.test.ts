import { renderHook, act } from '@testing-library/react';
import { useUpdateQueue } from './useUpdateQueue';

describe('useUpdateQueue', () => {
  it('should process queued tasks sequentially', async () => {
    const { result } = renderHook(() => useUpdateQueue());

    const task1 = jest.fn().mockResolvedValueOnce(undefined);
    const task2 = jest.fn().mockResolvedValueOnce(undefined);
    const task3 = jest.fn().mockResolvedValueOnce(undefined);

    act(() => {
      result.current.queueUpdate(() => task1());
      result.current.queueUpdate(() => task2());
      result.current.queueUpdate(() => task3());
    });

    expect(task1).toHaveBeenCalled();
    expect(task2).not.toHaveBeenCalled();
    expect(task3).not.toHaveBeenCalled();

    await act(async () => {
      await Promise.resolve();
    });

    expect(task2).toHaveBeenCalled();
    expect(task3).toHaveBeenCalled();
  });

  it('should process tasks in the correct order', async () => {
    const { result } = renderHook(() => useUpdateQueue());

    let taskOrder: string[] = [];

    const task1 = jest.fn().mockImplementation(() => {
      taskOrder.push('task1');
      return Promise.resolve();
    });
    const task2 = jest.fn().mockImplementation(() => {
      taskOrder.push('task2');
      return Promise.resolve();
    });
    const task3 = jest.fn().mockImplementation(() => {
      taskOrder.push('task3');
      return Promise.resolve();
    });

    act(() => {
      result.current.queueUpdate(task1);
      result.current.queueUpdate(task2);
      result.current.queueUpdate(task3);
    });

    await act(async () => {
      await task1.mock.results[0].value;
      await task2.mock.results[0].value;
      await task3.mock.results[0].value;
    });

    expect(taskOrder).toStrictEqual(['task1', 'task2', 'task3']);
  });

  it('should not process a task if the queue is empty', () => {
    const { result } = renderHook(() => useUpdateQueue());

    const processQueueSpy = jest.spyOn(result.current, 'processQueue');

    act(() => {
      result.current.processQueue();
    });

    expect(processQueueSpy).toHaveBeenCalled();
  });
});
