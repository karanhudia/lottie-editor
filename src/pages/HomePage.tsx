import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/lottiefiles/client';
import { Home } from '../components/Home';
import { Header } from '../components/Header';

export const HomePage = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Home />
    </ApolloProvider>
  );
};
