import gql from 'graphql-tag'

export const USER_DATA = gql`
  query UserData {
    userData {
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
