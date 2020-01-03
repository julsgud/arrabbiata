import React from 'react'
import styled from 'styled-components'
import { Timer } from '../Timer/Timer'

const Container = styled.div`
  font-family: 'Kulim Park', sans-serif;
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  padding: 1rem 1rem;
  background-color: #2d2c29;
  color: white;
`

export function App() {
  return (
    <Container>
      <Timer />
    </Container>
  )
}
