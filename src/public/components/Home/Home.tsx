import React from 'react'
import { Cycle } from './Cycle/Cycle'
import {useCurrentUserData} from "../../hooks/useCurrentUserData";

export function Home() {
  const user = useCurrentUserData()
  return (
    <>
      <Cycle user={user}/>
    </>
  )
}
