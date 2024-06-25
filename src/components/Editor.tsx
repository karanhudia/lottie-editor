import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { useParams } from 'react-router-dom';
import { LottieAnimation, useFetchEditedLottieQuery } from '../graphql/lottie-server/generated';
import { useSocket } from '../hooks/useSocket';
import { Header } from './Header';
import { Content } from './Content';

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
      if (!data.lottie) {
        return;
      }

      // TODO: Add typeguard to check if lottie animation
      setLottieJSON(data.lottie.json as LottieAnimation);
    },
  });

  return (
    <>
      <Header />
      <Content />
    </>
  );
};
