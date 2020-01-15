import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './Home'
import { Login } from '../Login/Login'
import { AuthContext } from '../../contexts/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  )
}

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
