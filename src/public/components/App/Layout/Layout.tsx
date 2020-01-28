import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { AuthLayout } from './AuthLayout'
import { PrivateRoute } from './PrivateRoute/PrivateRoute'

export const Layout: React.FC = () => {
  return (
    <Switch>
      <Redirect from="/" to="/auth" exact />
      <Route path="/auth" component={AuthLayout} />
      <PrivateRoute path="/app" component={AppLayout} />
    </Switch>
  )
}
