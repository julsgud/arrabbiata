import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { Timer } from '../Timer/Timer'

const Container = styled.div`
  font-family: 'Kulim Park', sans-serif;
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  padding: 1rem 1rem;
`

export function Home() {
  const user = useContext(UserContext)

  return (
    <>
      <div> Hey {user.firstName || 'There'} </div>
      <div> Get to work! </div>
      <Timer />
    </>
  )
}
