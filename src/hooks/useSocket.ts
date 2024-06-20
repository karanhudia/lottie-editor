import { useNavigate } from 'react-router-dom';
import { LottieAnimation } from '../types/LottieAnimation';
import { v4 as uuidv4 } from 'uuid';
import { socket } from '../socket';
import { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';

export const useSocket = () => {
  const navigate = useNavigate();
  const { setLottieJSON } = useContext(SharedProps);

  const createJSON = (json: LottieAnimation) => {
    const uuid = uuidv4();

    setLottieJSON(json);
    socket.emit('createJSON', {
      uuid,
      json,
    });
    navigate(`edit/${uuid}`);
  };

  const updateJSON = (uuid: string, json: LottieAnimation) => {
    setLottieJSON(json);

    socket.emit('updateJSON', {
      uuid,
      json,
    });
  };

  return {
    createJSON,
    updateJSON,
  };
};
