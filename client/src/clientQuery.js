import ApolloClient, { gql as graphql } from 'apollo-boost';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_URI}`
});
export const gql = graphql;

export default client;
