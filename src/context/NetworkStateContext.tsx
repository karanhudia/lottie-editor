import React, { createContext, useContext, useState } from 'react';

export enum SaveState {
  LayerDelete,
  ColorUpdate,
  SpeedUpdate,
}

export const NetworkState = createContext<{
  isSaving: boolean;
  addToSaveQueue: (state: SaveState) => void;
  removeFromSaveQueue: (state: SaveState, count?: number) => void;
  isConnected: boolean;
  setConnection: (state: boolean) => void;
}>({
  isSaving: false,
  addToSaveQueue: () => null,
  removeFromSaveQueue: () => null,
  isConnected: false,
  setConnection: () => null,
});

export const NetworkStateContext = ({ children }: { children: React.ReactNode }) => {
  // Queue for saving updates in progress
  const [saveQueue, setSaveQueue] = useState<Map<SaveState, number>>(new Map());

  // Maintains the state of websockets connection
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  const handleAddToSaveQueue = (state: SaveState) => {
    setSaveQueue((prev) => {
      const newSaveQueue = new Map(prev);
      newSaveQueue.set(state, (newSaveQueue.get(state) ?? 0) + 1);

      return newSaveQueue;
    });
  };

  const handleRemoveFromSaveQueue = (state: SaveState, count?: number) => {
    setSaveQueue((prev) => {
      const newSaveQueue = new Map(prev);

      newSaveQueue.set(state, count ?? (newSaveQueue.get(state) ?? 1) - 1);

      return newSaveQueue;
    });
  };

  const handleNetworkConnection = (state: boolean) => {
    setIsSocketConnected(state);
  };

  const isSaving = Array.from(saveQueue.values()).some((value) => value !== 0);

  return (
    <NetworkState.Provider
      value={{
        isSaving: isSaving,
        addToSaveQueue: handleAddToSaveQueue,
        removeFromSaveQueue: handleRemoveFromSaveQueue,
        isConnected: isSocketConnected,
        setConnection: handleNetworkConnection,
      }}
    >
      {children}
    </NetworkState.Provider>
  );
};

export const useNetworkState = () => {
  const context = useContext(NetworkState);

  if (context === undefined) {
    throw new Error('useNetworkState must be used within a NetworkState provider');
  }

  return context;
};
