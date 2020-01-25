import gql from 'graphql-tag'

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      firstName
      lastName
      email
    }
  }
`
