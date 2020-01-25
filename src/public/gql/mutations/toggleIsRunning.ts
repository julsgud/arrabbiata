import gql from 'graphql-tag'

export const TOGGLE_IS_RUNNING = gql`
  mutation ToggleIsRunning {
    toggleIsRunning @client
  }
`
