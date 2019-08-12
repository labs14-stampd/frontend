import client, { gql } from '../../../clientQuery';

const queries = {
  getUserById(body) {
    return client.query({
      variables: {
        id: body.id
      },
      query: gql`
        query GetUserById(
          $id: ID!
        ) {
          getUserById (
            id: $id
          ) {
            id
            username
            email
            profilePicture
            roleId
            sub
            token
            tokenExpiration
            schoolDetails {
              id
              name
              street1
              street2
              city
              state
              zip
              type
              phone
              url
              credentials {
                id
                credName
                description
                ownerName
                type
                studentEmail
                imageUrl
                criteria
                valid
                issuedOn
                expirationDate
              }
            }
          }
        }
      `
    });
  }
};

export default queries;
