import client, { gql } from '../../clientQuery';

const queries = {
  getCredentialById(body) {
    return client.query({
      variables: {
        id: body.id
      },
      query: gql`
        query GetCredentialById($id: ID!) {
          getCredentialById(id: $id) {
            id
            credName
            description
            credHash
            txHash
            type
            ownerName
            studentEmail
            imageUrl
            criteria
            valid
            issuedOn
            expirationDate
            schoolId
            schoolsUserInfo {
              username
              email
            }
          }
        }
      `
    });
  },
  shareCredential(body) {
    return client.query({
      variables: {
        id: body.id,
        email: body.email
      },
      query: gql`
      query ShareCredential($id: ID!, $email: String!) {
        shareCredential(
          id: $id,
          email: $email
        ) {

        }
      }
    `
    });
  }
};

export default queries;
