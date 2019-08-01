import client, { gql } from '../clientQuery';

export const register = user => {
  return client.mutate({
    variables: {
      email: user.email,
      picture: user.picture
    },
    mutation: gql`
      mutation AddUser($email: String!, $picture: String) {
        addUser(email: $email, picture: $picture) {
          id
          username
          email
          roleId
        }
      }
    `
  });
};
