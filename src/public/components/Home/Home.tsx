import React from 'react'
import { Timer } from './Timer/Timer'
import {useCurrentUserData} from "../../hooks/useCurrentUserData";

export function Home() {
  const user = useCurrentUserData()
  return (
    <>
      <Timer user={user}/>
    </>
  )
}
