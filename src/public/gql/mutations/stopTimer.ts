import gql from 'graphql-tag'

export const STOP_TIMER = gql`
  mutation StopTimer {
    stopTimer @client
  }
`
