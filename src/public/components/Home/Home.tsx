import React from 'react'
import { Timer } from '../Timer/Timer'
import {useUserDataQuery} from "../../../generated/graphql";

export function Home() {
    const {data: {userData}} = useUserDataQuery()
  return (
    <>
      <div> Hey {userData?.firstName || 'There'} </div>
      <div> Get to work! </div>
      <Timer userData={userData}/>
    </>
  )
}
