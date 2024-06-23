import React, { useContext } from 'react';
import { ApolloProvider } from '@apollo/client';
import { SharedProps } from '../context/SharedPropsContext';
import { useParams } from 'react-router-dom';
import { useFetchEditedLottieQuery } from '../graphql/lottie-server/generated';
import { useSocket } from '../hooks/useSocket';
import { client } from '../graphql/lottie-server/client';
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

      setLottieJSON(data.lottie.json);
    },
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <Content />
    </ApolloProvider>
  );
};
