import React from 'react'
import { Timer } from '../Timer/Timer'
import {useCurrentUserData} from "../../hooks/useCurrentUserData";

export function Home() {
  const user = useCurrentUserData()

  return (
    <>
      <div> Hey {user?.firstName || 'There'} </div>
      <div> Get to work! </div>
      <Timer user={user}/>
    </>
  )
}
