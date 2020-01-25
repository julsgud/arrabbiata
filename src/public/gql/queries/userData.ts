import gql from 'graphql-tag'

export const GET_USER_DATA = gql`  
  query GetUserData($userId: ID!) {
    getUserData(userId: $userId) {
      id
      categoryName
      createdAt
      description
    }
  }
`
