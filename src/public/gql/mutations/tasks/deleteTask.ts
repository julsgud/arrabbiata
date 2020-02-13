import gql from 'graphql-tag'

export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: String!) {
    deleteTask(taskId: $taskId) {
      id
    }
  }
`
