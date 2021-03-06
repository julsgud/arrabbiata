import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Home } from '../../Home/Home'
import { UserDataFetcher } from '../../wrappers/UserDataFetcher/UserDataFetcher'
import { PrivateRoute } from './PrivateRoute/PrivateRoute'
import { Settings } from '../../Settings/Settings'
import { Reports } from '../../Reports/Reports'

export function AppLayout() {
  return (
    <UserDataFetcher>
      <Switch>
        <Redirect from="/app" to="/app/home" exact />
        <PrivateRoute path="/app/home" component={Home} />
        <PrivateRoute path="/app/settings" component={Settings} />
        <PrivateRoute path="/app/reports" component={Reports} />
      </Switch>
    </UserDataFetcher>
  )
}
