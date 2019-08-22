import client, { gql } from '../../clientQuery';

const queries = {
  addUserEmail(body) {
    return client.mutate({
      variables: {
        userId: body.userId,
        email: body.email
      },
      mutation: gql`
        mutation AddUserEmail($userId: ID!, $email: String!) {
          addUserEmail(userId: $userId, email: $email) {
            email
            id
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
      `
    });
  },
  getUserById(body) {
    return client.query({
      variables: {
        id: body.id
      },
      query: gql`
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
              emailList {
                email
                id
              }
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
  updateStudentDetail(body) {
    return client.mutate({
      variables: {
        fullName: body.fullName,
        firstName: body.firstName,
        lastName: body.lastName,
        middleName: body.middleName,
        street1: body.street1,
        street2: body.street2,
        city: body.city,
        state: body.state,
        zip: body.zip,
        phone: body.phone,
        userId: body.userId,
        id: body.id
      },
      mutation: gql`
        mutation UpdateStudentDetail(
          $fullName: String
          $firstName: String
          $lastName: String
          $middleName: String
          $street1: String
          $street2: String
          $city: String
          $state: String
          $zip: String
          $phone: String!
          $userId: ID!
          $id: ID!
        ) {
          updateStudentDetail(
            fullName: $fullName
            firstName: $firstName
            lastName: $lastName
            middleName: $middleName
            street1: $street1
            street2: $street2
            city: $city
            state: $state
            zip: $zip
            phone: $phone
            userId: $userId
            id: $id
          ) {
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
      `
    });
  },
  deleteUserEmail(body) {
    return client.mutate({
      variables: {
        id: body.id
      },
      mutation: gql`
        mutation DeleteUserEmail($id: ID!) {
          deleteUserEmail(id: $id) {
            id
          }
        }
      `
    });
  },
  getCredentialsByEmail(body) {
    return client.mutate({
      variables: {
        email: body.email
      },
      mutation: gql`
        mutation GetCredentialsByEmail($email: String!) {
          getCredentialsByEmail(studentEmail: $email) {
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
      `
    });
  }
};

export default queries;
