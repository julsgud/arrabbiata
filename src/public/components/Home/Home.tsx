import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Timer } from '../Timer/Timer'

export function Home() {
  const { user, categories } = useContext(UserContext)

  return (
    <>
      <div> Hey {user.firstName || 'There'} </div>
      <div> Get to work! </div>
      <Timer />
    </>
  )
}
