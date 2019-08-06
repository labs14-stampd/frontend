import client, { gql } from '../../../clientQuery';

const queries = {
  addNewCredentials(body) {
    return client.mutate({
      variables: {
        name: body.name,
        description: body.description,
        type: body.type,
        studentEmail: body.studentEmail,
        imageUrl: body.imageUrl,
        criteria: body.criteria,
        issuedOn: body.issuedOn,
        expirationDate: body.expirationDate,
        schoolId: body.schoolId
      },
      mutation: gql`
        mutation AddNewCredential(
          $name: String!
          $description: String!
          $type: String!
          $studentEmail: String!
          $imageUrl: String!
          $criteria: String!
          $issuedOn: String!
          $expirationDate: String
          $schoolId: ID!
        ) {
          addNewCredential(
            name: $name
            description: $description
            type: $type
            studentEmail: $studentEmail
            imageUrl: $imageUrl
            criteria: $criteria
            issuedOn: $issuedOn
            expirationDate: $expirationDate
            schoolId: $schoolId
          ) {
            name
            txHash
            description
            studentEmail
            imageUrl
            issuedOn
            expirationDate
            schoolId
          }
        }
      `
    });
  }
};

export default queries;
