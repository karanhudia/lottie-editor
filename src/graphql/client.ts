import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // TODO: Add env variable
  uri: 'https://lottie-editor.onrender.com/graphql',
  cache: new InMemoryCache(),
});
