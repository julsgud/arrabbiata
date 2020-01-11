import gql from 'graphql-tag';

export const typeDefs = gql`
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Query {
        currentUser: User
    }

    type Mutation {
        logout: Boolean
    }
`;