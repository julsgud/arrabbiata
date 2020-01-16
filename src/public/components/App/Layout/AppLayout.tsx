import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Home } from '../../Home/Home'
import { UserDataFetcher } from '../../UserDataFetcher/UserDataFetcher'
import { PrivateRoute } from './PrivateRoute/PrivateRoute'

export function AppLayout() {
  return (
    <UserDataFetcher>
      <Redirect from="/app" to="/app/home" exact />
      <PrivateRoute path="/app/home" component={Home} />
    </UserDataFetcher>
  )
}
