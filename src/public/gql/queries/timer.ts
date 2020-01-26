import gql from 'graphql-tag'

export const GET_TIMER = gql`
  query Timer {
    timer @client {
      id
      isTimerRunning
      currentTimeInSeconds
      timerDirection
    }
  }
`
