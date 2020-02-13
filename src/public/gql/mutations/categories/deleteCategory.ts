import gql from 'graphql-tag'

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($categoryId: String!) {
    deleteCategory(categoryId: $categoryId) {
      id
    }
  }
`
