import gql from 'graphql-tag'

export const SAVE_CYCLE = gql`
  mutation SaveCycle(
    $lengthInSeconds: Int!
    $createdAt: String!
    $categoryIds: [String]!
    $taskIds: [String]!
    $notes: String
  ) {
    saveCycle(
      lengthInSeconds: $lengthInSeconds
      createdAt: $createdAt
      categoryIds: $categoryIds
      taskIds: $taskIds
      notes: $notes
    ) {
      id
    }
  }
`
