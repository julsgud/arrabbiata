import gql from 'graphql-tag'

export const SAVE_CYCLE = gql`
  mutation SaveCycle(
    $id: ID!
    $lengthInSeconds: Int!
    $userId: String!
    $createdAt: String!
    $categoryIds: [String]!
    $taskIds: [String]!
  ) {
    saveCycle(
      id: $id
      lengthInSeconds: $lengthInSeconds
      userId: $userId
      createdAt: $createdAt
      categoryIds: $categoryIds
      taskIds: $taskIds
    ) {
      id
    }
  }
`
