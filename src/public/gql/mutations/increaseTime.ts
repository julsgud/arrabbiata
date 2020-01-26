import gql from 'graphql-tag'

export const INCREASE_TIME = gql`
  mutation IncreaseTime {
    increaseTime @client
  }
`
