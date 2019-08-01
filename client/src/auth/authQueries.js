import client, { gql } from '../clientQuery';

export const register = user => {
  return client.mutate({
    variables: {
      email: user.email,
      picture: user.picture,
      authToken: user.authToken
    },
    mutation: gql`
      mutation AddUser($email: String!, $picture: String, $authToken: String!) {
        addUser(
          email: $email
          profilePicture: $picture
          authToken: $authToken
        ) {
          id
          username
          email
          roleId
        }
      }
    `
  });
};
