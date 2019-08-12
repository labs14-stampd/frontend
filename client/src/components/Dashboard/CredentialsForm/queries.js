import client, { gql } from '../../../clientQuery';

const queries = {
  addNewCredentials(body) {
    return client.mutate({
      variables: {
        credName: body.credName,
        ownerName: body.ownerName,
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
          $credName: String!
          $ownerName: String!
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
            credName: $credName
            ownerName: $ownerName
            description: $description
            type: $type
            studentEmail: $studentEmail
            imageUrl: $imageUrl
            criteria: $criteria
            issuedOn: $issuedOn
            expirationDate: $expirationDate
            schoolId: $schoolId
          ) {
            credName
            ownerName
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
