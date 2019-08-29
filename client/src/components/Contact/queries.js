import client, { gql } from '../../../clientQuery';

const queries = {
  addRole(body) {
    return client.mutate({
      variables: {
        id: body.id, // User ID
        roleId: body.roleId
      },
      mutation: gql`
        mutation UpdateUser($id: ID!, $roleId: ID!) {
          updateUser(id: $id, roleId: $roleId) {
            id
            roleId
          }
        }
      `
    });
  },
  addSchoolDetails(body) {
    return client.mutate({
      variables: {
        name: body.name,
        taxId: body.taxId,
        street1: body.street1,
        street2: body.street2,
        city: body.city,
        state: body.state,
        zip: body.zip,
        type: body.type,
        phone: body.phone,
        url: body.url,
        userId: body.userId
      },
      mutation: gql`
        mutation AddSchoolDetails(
          $name: String!
          $taxId: String!
          $street1: String
          $street2: String
          $city: String
          $state: String
          $zip: String
          $type: String
          $phone: String!
          $url: String!
          $userId: ID!
        ) {
          addSchoolDetail(
            name: $name
            taxId: $taxId
            street1: $street1
            street2: $street2
            city: $city
            state: $state
            zip: $zip
            type: $type
            phone: $phone
            url: $url
            userId: $userId
          ) {
            id
            name
            taxId
            street1
            street2
            city
            state
            zip
            type
            phone
            url
            userId
            token
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
  addStudentDetail(body) {
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
        userId: body.userId
      },
      mutation: gql`
        mutation AddStudentDetail(
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
        ) {
          addStudentDetail(
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
            token
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
      `
    });
  }
};

export default queries;
