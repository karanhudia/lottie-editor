import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_LOTTIEFILES_GRAPHQL_URL ?? 'https://graphql.lottiefiles.com',
  cache: new InMemoryCache(),
});
