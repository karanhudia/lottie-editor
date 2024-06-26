import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { LottieSocketEvents, UpdateLottieMessage } from '../graphql/lottie-server/generated';
import { deleteLottieLayer, updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { lottieColorToRgba } from '../utils/color';
import { useSharedProps } from './SharedPropsContext';

export enum SaveState {
  LayerDelete,
  ColorUpdate,
  SpeedUpdate,
}

export type NetworkStateProps = {
  isSaving: boolean;
  addToSaveQueue: (state: SaveState) => void;
  removeFromSaveQueue: (state: SaveState, count?: number) => void;
  isConnected: boolean;
};

export const NetworkState = createContext<NetworkStateProps>({
  isSaving: false,
  addToSaveQueue: () => null,
  removeFromSaveQueue: () => null,
  isConnected: false,
});

const DEFAULT_WEBSOCKET_URL = 'https://lottie-editor.onrender.com/';
export const socket = io(process.env.REACT_APP_WEBSOCKET_URL ?? DEFAULT_WEBSOCKET_URL, {
  transports: ['websocket'],
  upgrade: false,
});

export const NetworkStateContext = ({ children }: { children: React.ReactNode }) => {
  const { lottieJSON, setLottieJSON } = useSharedProps();
  // Queue for saving updates in progress
  const [saveQueue, setSaveQueue] = useState<Map<SaveState, number>>(new Map());

  // Maintains the state of websockets connection
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  const getChangesFromServer = useCallback(
    (message: UpdateLottieMessage) => {
      if (!lottieJSON) {
        return;
      }

      const { payload } = message;

      let updatedLottie = { ...lottieJSON };

      switch (payload.__typename) {
        case 'ColorPayload':
          updatedLottie = updateLottieColor(
            lottieJSON,
            payload.layer,
            payload.shape,
            payload.shapeItem,
            lottieColorToRgba(payload.color),
          );
          break;

        case 'SpeedPayload':
          updatedLottie = updateLottieSpeed(lottieJSON, payload.frameRate);
          break;
        case 'LayerPayload':
          updatedLottie = deleteLottieLayer(lottieJSON, payload.layer);
      }

      setLottieJSON(updatedLottie);
    },
    [lottieJSON, setLottieJSON],
  );

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

  const onConnect = useCallback(() => {
    setIsSocketConnected(true);
  }, [setIsSocketConnected]);

  const onDisconnect = useCallback(() => {
    setIsSocketConnected(false);
  }, [setIsSocketConnected]);

  useEffect(() => {
    console.log('First subscription attempt');
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on(LottieSocketEvents.UpdateJson, getChangesFromServer);

    return () => {
      console.log('Unsubscribing from socket events');
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off(LottieSocketEvents.UpdateJson, getChangesFromServer);
    };
  }, [onConnect, onDisconnect, getChangesFromServer]);

  const isSaving = Array.from(saveQueue.values()).some((value) => value !== 0);

  return (
    <NetworkState.Provider
      value={{
        isSaving: isSaving,
        addToSaveQueue: handleAddToSaveQueue,
        removeFromSaveQueue: handleRemoveFromSaveQueue,
        isConnected: isSocketConnected,
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
