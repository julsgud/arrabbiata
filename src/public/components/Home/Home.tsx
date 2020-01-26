import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Timer } from '../Timer/Timer'

export function Home() {
    console.log('home')
  // const { user } = useContext(UserContext)
    const user = 'oho'

  return (
    <>
      <div> Hey {user?.firstName || 'There'} </div>
      <div> Get to work! </div>
      <Timer />
    </>
  )
}
