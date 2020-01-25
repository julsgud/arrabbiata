import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID
    googleId: String
    firstName: String
    lastName: String
    email: String
  }

  type Category {
    id: ID
    categoryName: String
    userId: String
    createdAt: String
    description: String
  }
  
  type Timer {
    id: ID
    isRunning: Boolean
    currentTimeInSeconds: Int
  }

  type Query {
    currentUser: User
    getUserData(userId: ID): [Category]!
  }

  type AuthPayload {
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
  }
`
