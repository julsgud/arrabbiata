import gql from 'graphql-tag'

export const SET_TIME_LIMIT = gql`
  mutation SetTimeLimit($timeLimit: Int!) {
    setTimeLimit(timeLimit: $timeLimit) @client
  }
`
