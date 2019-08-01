import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_URI}`
});
export const gql = gql;

export default client;
