import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri:
    process.env.REACT_APP_LOTTIE_SERVER_GRAPHQL_URL ?? 'https://lottie-editor.onrender.com/graphql',
  cache: new InMemoryCache(),
});
