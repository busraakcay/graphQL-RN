import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'http://192.168.133.131:4000/',
  cache: new InMemoryCache(),
});
