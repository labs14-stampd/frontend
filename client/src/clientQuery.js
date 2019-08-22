// import ApolloClient, { gql as graphql, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

// const httpLink = new HttpLink({uri: `${process.env.REACT_APP_GRAPHQL_URI}`})

// const authLink = new

// const client = new ApolloClient({
//   uri:
// });
// export const gql = graphql;

// export default client;

import {
  ApolloClient,
  gql as graphql,
  ApolloLink,
  InMemoryCache,
  HttpLink
} from 'apollo-boost';

const httpLink = new HttpLink({ uri: `${process.env.REACT_APP_GRAPHQL_URI}` });

const authLink = new ApolloLink((operation, forward) => {
  const { token } = localStorage;
  // set HTTP headers
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
  // Call next link to middleware chain
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // this chains it to HttpLink
  cache: new InMemoryCache()
});
export const gql = graphql;

export default client;
