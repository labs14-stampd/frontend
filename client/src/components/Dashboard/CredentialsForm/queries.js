import client, { gql } from '../../../clientQuery';

export const addNewCredentials = body => {
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
      schoolId: body.schoolId,
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
          name: body.name,
          description: body.description,
          type: body.type,
          studentEmail: body.studentEmail,
          imageUrl: body.imageUrl,
          criteria: body.criteria,
          issuedOn: body.issuedOn,
          expirationDate: body.expirationDate,
          schoolId: body.schoolId,
        ) {
          name
          description
          studentEmail
          imageUrl
          issuedOn
          expirationDate
          schoolId
        }
      }
    `
  })
};