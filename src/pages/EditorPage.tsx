import React from 'react';
import { useSocket } from '../hooks/useSocket';
import { client } from '../graphql/lottie-server/client';
import { ApolloProvider } from '@apollo/client';
import { Editor } from '../components/Editor';

export const EditorPage = () => {
  useSocket();

  return (
    <ApolloProvider client={client}>
      <Editor />
    </ApolloProvider>
  );
};
