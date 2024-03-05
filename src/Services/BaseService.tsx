import { ApolloClient, InMemoryCache } from '@apollo/client';

export const BaseServer = new ApolloClient({
  uri: 'YOUR_WORDPRESS_GRAPHQL_ENDPOINT',
  cache: new InMemoryCache()
});
