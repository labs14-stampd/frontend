import ApolloClient, { gql } from './node_modules/apollo-boost';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_URI}`
});

export const register = user => {
  return client.mutate({
    variables: { email: user.email },
    mutation: gql`
      mutation AddUser($email: String!) {
        addUser(email: $email) {
          username
          email
          roleId
        }
      }
    `
  });
};
