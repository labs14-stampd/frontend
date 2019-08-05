import client, { gql } from '../clientQuery';

export const register = user => {
  return client.mutate({
    variables: {
      authToken: user.authToken
    },
    mutation: gql`
      mutation AddUser($authToken: String!) {
        addUser(authToken: $authToken) {
          id
          username
          email
          roleId
        }
      }
    `
  });
};
