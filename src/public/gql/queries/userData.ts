import gql from 'graphql-tag'

export const USER_DATA_QUERY = gql`
  query UserDataQuery {
    userData {
      categories {
        id
        categoryName
        description
      }
    }
  }
`
