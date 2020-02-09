import gql from 'graphql-tag'

export const SET_CYCLE_TASK = gql`
  mutation SetCycleTask($taskId: String!) {
    setCycleTask(taskId: $taskId) @client
  }
`
