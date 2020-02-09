import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID!
    googleId: String
    firstName: String
    lastName: String
    email: String
    categories: [Category]
    tasks: [Task]
  }

  type Category {
    id: ID!
    categoryName: String
    userId: String
    createdAt: String
    description: String
  }

  type Task {
    id: ID!
    taskName: String
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
    selectedTaskId: String
    timeLimitInSeconds: Int
  }

  type Cycle {
    id: ID
    lengthInSeconds: Int
    userId: ID
    createdAt: String
    categoryIds: [String]
    taskIds: [String]
    notes: String
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
    setCycleCategory(categoryId: String!): Boolean
    setCycleTask(taskId: String!): Boolean
    setTimeLimit(timeLimit: Int!): Boolean
    saveCycle(
      id: ID!
      lengthInSeconds: Int!
      userId: String!
      createdAt: String!
      categoryIds: [String]!
      taskIds: [String]!
    ): Cycle
  }
`
