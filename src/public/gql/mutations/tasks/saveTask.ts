import gql from 'graphql-tag'

export const SAVE_TASK = gql`
  mutation SaveTask($categoryId: String!, $taskName: String!) {
    saveTask(categoryId: $categoryId, taskName: $taskName) {
      id
      categoryId
      createdAt
      taskName
      userId
    }
  }
`
