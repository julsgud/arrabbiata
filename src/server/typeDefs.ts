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
    
    type AuthPayload {
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): AuthPayload
        logout: Boolean
    }
`;