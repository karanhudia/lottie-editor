import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { useParams } from 'react-router-dom';
import { useFetchEditedLottieQuery } from '../graphql/lottie-server/generated';
import { useSocket } from '../hooks/useSocket';
import { Header } from './Header';
import { Content } from './Content';
import { isLottieAnimation } from '../utils/typeGuard';

export type EditorRouteParams = { editId: string };

export const Editor = () => {
  useSocket();
  const { setLottieJSON } = useContext(SharedProps);
  const params = useParams<EditorRouteParams>();

  useFetchEditedLottieQuery({
    variables: {
      editId: params.editId ?? '',
    },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (!isLottieAnimation(data.lottie?.json)) {
        return;
      }

      setLottieJSON(data.lottie.json);
    },
  });

  return (
    <>
      <Header />
      <Content />
    </>
  );
};
