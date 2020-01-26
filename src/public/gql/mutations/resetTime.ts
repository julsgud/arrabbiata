import gql from 'graphql-tag'

export const RESET_TIME = gql`
  mutation ResetTime {
    resetTime @client
  }
`
