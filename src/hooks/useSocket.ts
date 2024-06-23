import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useContext, useEffect } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { io } from 'socket.io-client';
import { updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { lottieColorToRgba } from '../utils/color';
import {
  CreateLottieMessage,
  LottieAnimation,
  LottieSocketEvents,
  SocketAcknowledgement,
  UpdateLottieMessage,
} from '../graphql/generated/graphql';

const DEFAULT_WEBSOCKET_URL = 'https://lottie-editor.onrender.com/';
export const socket = io(process.env.REACT_APP_WEBSOCKET_URL ?? DEFAULT_WEBSOCKET_URL, {
  transports: ['websocket'],
});

export const useSocket = () => {
  const navigate = useNavigate();
  const { lottieJSON, setLottieJSON, setIsSocketConnected } = useContext(SharedProps);

  const onConnect = useCallback(() => {
    setIsSocketConnected(true);
  }, [setIsSocketConnected]);

  const onDisconnect = useCallback(() => {
    setIsSocketConnected(false);
  }, [setIsSocketConnected]);

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
      }

      setLottieJSON(updatedLottie);
    },
    [lottieJSON, setLottieJSON],
  );

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

  const createJSON = useCallback(
    async (json: LottieAnimation) => {
      const uuid = uuidv4();

      setLottieJSON(json);
      const response: SocketAcknowledgement = await socket.emitWithAck(
        LottieSocketEvents.CreateJson,
        {
          uuid,
          payload: {
            json,
          },
        } as CreateLottieMessage,
      );

      if (response.code === 200) {
        navigate(`edit/${uuid}`);
      }
    },
    [setLottieJSON, navigate],
  );

  const updateJSON = useCallback(
    async (message: UpdateLottieMessage): Promise<SocketAcknowledgement> => {
      return socket.emitWithAck(LottieSocketEvents.UpdateJson, message);
    },
    [],
  );

  return {
    createJSON,
    updateJSON,
  };
};
