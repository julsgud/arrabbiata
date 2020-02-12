import gql from 'graphql-tag'

export const SET_CYCLE_CATEGORY = gql`
  mutation SetCycleCategory($categoryId: String!) {
    setCycleCategory(categoryId: $categoryId) @client
  }
`
