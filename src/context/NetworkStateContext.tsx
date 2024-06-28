import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import {
  LottieAnimation,
  LottieSocketEvents,
  namedOperations,
  UpdateLottieBroadcast,
} from '../graphql/lottie-server/generated';
import { useSharedProps } from './SharedPropsContext';
import { Outlet, useParams } from 'react-router-dom';
import { EditorRouteParams } from '../components/Editor';
import { client } from '../graphql/client';
import { isLottieAnimation } from '../utils/typeGuard';

export enum SaveState {
  LayerDelete,
  ColorUpdate,
  SpeedUpdate,
}

export type NetworkStateProps = {
  isSaving: boolean;
  isLayerSaving: boolean;
  addToSaveQueue: (state: SaveState) => void;
  removeFromSaveQueue: (state: SaveState, count?: number) => void;
  isConnected: boolean;
  hasVersionConflict: boolean;
  setVersionConflict: (state: boolean) => void;
  synchronizeLottieInformation: (latestLottie: LottieAnimation, latestVersion: number) => void;
};

export const NetworkState = createContext<NetworkStateProps>({
  isSaving: false,
  isLayerSaving: false,
  addToSaveQueue: () => null,
  removeFromSaveQueue: () => null,
  isConnected: false,
  hasVersionConflict: false,
  setVersionConflict: () => null,
  synchronizeLottieInformation: () => null,
});

const DEFAULT_WEBSOCKET_URL = 'https://lottie-editor.onrender.com/';
export const socket = io(process.env.REACT_APP_WEBSOCKET_URL ?? DEFAULT_WEBSOCKET_URL, {
  transports: ['websocket'],
  upgrade: false,
});

export const NetworkStateContext = () => {
  const params = useParams<EditorRouteParams>();
  const { lottieJSON, setLottieJSON, animationVersion } = useSharedProps();
  // Queue for saving updates in progress
  const [saveQueue, setSaveQueue] = useState<Map<SaveState, number>>(new Map());

  // Maintains the state of websockets connection
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  // Showing user notification for version conflicts
  const [hasVersionConflict, setHasVersionConflict] = useState(false);

  const synchronizeLottieInformation = useCallback(
    async (latestLottie: LottieAnimation, latestVersion: number) => {
      // Set the latest lottie JSON
      setLottieJSON(latestLottie);
      // Update the version to latest from network updates (graphql or websockets)
      animationVersion.current = latestVersion;
      // Remove the version conflict notification with a minor delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setHasVersionConflict(false);
    },
    [setLottieJSON, animationVersion],
  );

  const getChangesFromServer = useCallback(
    (message: UpdateLottieBroadcast) => {
      // TODO: Remove the editId check when rooms are implemented in websockets
      // If the current lottie is different, we don't need to consume this message
      if (params.editId !== message.uuid || !lottieJSON) {
        return;
      }

      if (isLottieAnimation(message.json)) {
        void synchronizeLottieInformation(message.json, message.version);
      }
    },
    [lottieJSON, params.editId, synchronizeLottieInformation],
  );

  const handleSetVersionConflict = useCallback((state: boolean) => {
    setHasVersionConflict(state);
  }, []);

  const handleAddToSaveQueue = useCallback((state: SaveState) => {
    setSaveQueue((prev) => {
      const newSaveQueue = new Map(prev);
      newSaveQueue.set(state, (newSaveQueue.get(state) ?? 0) + 1);

      return newSaveQueue;
    });
  }, []);

  const handleRemoveFromSaveQueue = useCallback((state: SaveState, count?: number) => {
    setSaveQueue((prev) => {
      const newSaveQueue = new Map(prev);
      const currentQueue = newSaveQueue.get(state);
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      newSaveQueue.set(state, count ?? (currentQueue || 1) - 1);

      return newSaveQueue;
    });
  }, []);

  const onConnect = useCallback(async () => {
    setIsSocketConnected(true);

    if (!lottieJSON) {
      return;
    }

    await client.refetchQueries({
      include: [namedOperations.Query.fetchEditedLottie],
    });
  }, [setIsSocketConnected, lottieJSON]);

  const onDisconnect = useCallback(() => {
    setIsSocketConnected(false);
  }, [setIsSocketConnected]);

  useEffect(() => {
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on(LottieSocketEvents.UpdateJson, getChangesFromServer);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off(LottieSocketEvents.UpdateJson, getChangesFromServer);
    };
  }, [onConnect, onDisconnect, getChangesFromServer]);

  const isSaving = useMemo(() => {
    return Array.from(saveQueue.values()).some((value) => value !== 0);
  }, [saveQueue]);

  const isLayerSaving = !!saveQueue.get(SaveState.LayerDelete);

  const contextValue = useMemo(
    () => ({
      isSaving,
      addToSaveQueue: handleAddToSaveQueue,
      removeFromSaveQueue: handleRemoveFromSaveQueue,
      isConnected: isSocketConnected,
      hasVersionConflict,
      setVersionConflict: handleSetVersionConflict,
      synchronizeLottieInformation,
      isLayerSaving,
    }),
    [
      isSaving,
      handleAddToSaveQueue,
      handleRemoveFromSaveQueue,
      isSocketConnected,
      hasVersionConflict,
      handleSetVersionConflict,
      synchronizeLottieInformation,
      isLayerSaving,
    ],
  );

  return (
    <NetworkState.Provider value={contextValue}>
      <Outlet />
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
