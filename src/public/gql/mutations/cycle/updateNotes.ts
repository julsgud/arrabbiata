import gql from 'graphql-tag'

export const UPDATE_NOTES = gql`
  mutation UpdateNotes($updatedNotes: String!) {
    updateNotes(updatedNotes: $updatedNotes) @client
  }
`
