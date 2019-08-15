import client, {
  gql
} from '../../../clientQuery';

const queries = {
  getUserById(body) {
    return client.query({
      variables: {
        id: body.id
      },
      query: gql `
        query GetUserById($id: ID!) {
          getUserById(id: $id) {
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
                credHash
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
            studentDetails {
              id
              fullName
              firstName
              lastName
              middleName
              street1
              street2
              city
              state
              zip
              phone
              userId
              credentials {
                id
                credHash
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
  },

  removeCredential(id, credHash) {
    return client.mutate({
      variables: {
        id,
        credHash
      },
      mutation: gql `
        mutation RemoveCredential($id: ID!, $credHash: String!) {
          removeCredential(id: $id, credHash: $credHash) {
            id
          }
        }
      `
    });
  }
};

export default queries;