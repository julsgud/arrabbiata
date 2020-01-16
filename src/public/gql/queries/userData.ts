import gql from 'graphql-tag'

export const USER_DATA_QUERY = gql`
  query UserDataQuery($userId: ID!) {
    userData(userId: $userId) {
      id
      categoryName
      createdAt
      description
    }
  }
`
