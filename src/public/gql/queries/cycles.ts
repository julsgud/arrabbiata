import gql from 'graphql-tag'

export const CYCLES = gql`
  query Cycles($startDate: String, $endDate: String, $categoryId: String, $taskId: String) {
    cycles(startDate: $startDate, endDate: $endDate, categoryId: $categoryId, taskId: $taskId) {
      id
      createdAt
      lengthInSeconds
      categoryIds
      taskIds
    }
  }
`
