import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../../Home/Home'
import { Login } from '../../Login/Login'
import { PrivateRoute } from './PrivateRoute'

export function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login">
        <Login />
      </Route>

      <PrivateRoute exact path="/home" component={Home} />
    </Switch>
  )
}
