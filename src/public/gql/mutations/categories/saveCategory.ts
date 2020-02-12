import gql from 'graphql-tag'

export const SAVE_CATEGORY = gql`
  mutation SaveCategory($categoryName: String!) {
    saveCategory(categoryName: $categoryName) {
      categoryName
      createdAt
      id
      userId
    }
  }
`
