import gql from 'graphql-tag'

export const USER_DATA = gql`
  query UserData($userId: ID!) {
    userData(userId: $userId) {
      categories {
        id
        categoryName
        createdAt
      }
      tasks {
        id
        taskName
        createdAt
        description
      }
    }
  }
`
