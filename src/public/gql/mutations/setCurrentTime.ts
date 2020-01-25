import gql from 'graphql-tag'

export const SET_CURRENT_TIME = gql`
  mutation SetCurrentTime($timeInSeconds: Int!) {
    setCurrentTime(timeInSeconds: $timeInSeconds) @client
  }
`
