import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID
    googleId: String
    firstName: String
    lastName: String
    email: String
    categories: [Category]
  }

  type Category {
    id: ID!
    categoryName: String
    userId: String
    createdAt: String
    description: String
  }

  type Timer {
    id: ID!
    isTimerRunning: Boolean
    currentTimeInSeconds: Int
    timerDirection: TimerDirection
    selectedCategoryId: String
  }

  enum TimerDirection {
    UP
    DOWN
  }

  type Query {
    currentUser: User
    userData(userId: ID): User
    timer: Timer!
  }

  type AuthPayload {
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
    setCurrentTime(timeInSeconds: Int!): Boolean
    toggleIsRunning: Boolean
    stopTimer: Boolean
  }
`
