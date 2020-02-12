import gql from 'graphql-tag'

export const RESET_CYCLE = gql`
  mutation ResetCycle {
    resetCycle @client
  }
`
