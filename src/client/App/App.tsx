import React from 'react'
import styled from 'styled-components'
import { Timer } from '../Timer/Timer'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const Container = styled.div`
  font-family: 'Kulim Park', sans-serif;
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  padding: 1rem 1rem;
  background-color: #2d2c29;
  color: white;
`

const CURRENT_USER_QUERY = gql`
  query CurrentUserQuery {
    currentUser {
      id
      firstName
      lastName
      email
    }
  }
`

export function App() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  console.log(loading, error, data)

  return (
    <Container>
      <Timer />
    </Container>
  )
}
