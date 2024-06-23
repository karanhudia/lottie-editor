import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useContext, useEffect } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { io } from 'socket.io-client';
import { Lottie } from '../types/lottie';
import { updateLottieColor, updateLottieSpeed } from '../utils/lottie';
import { RGBToHex } from '../utils/extractColors';
import {
  CreateLottieMessage,
  LottieSocketEvents,
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
            RGBToHex(payload.color),
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
  }, []);

  const createJSON = async (json: Lottie) => {
    const uuid = uuidv4();

    setLottieJSON(json);
    const response = await socket.emitWithAck(LottieSocketEvents.CreateJson, {
      uuid,
      payload: {
        json,
      },
    } as CreateLottieMessage);

    if (response.status === 200) {
      navigate(`edit/${uuid}`);
    }
  };

  const updateJSON = async (
    message: UpdateLottieMessage,
  ): Promise<{
    status: number;
  }> => {
    return await socket.emitWithAck(LottieSocketEvents.UpdateJson, message);
  };

  return {
    createJSON,
    updateJSON,
  };
};
