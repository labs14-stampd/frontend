import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_URI}`
});

export const addSchoolDetails = body => {
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
        }
      }
    `
  });
};
