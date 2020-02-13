import gql from 'graphql-tag'

export const SAVE_CATEGORY = gql`
  mutation SaveTask($taskName: String!) {
    saveTask(taskName: $taskName) {
      taskName
      createdAt
      id
      userId
    }
  }
`
