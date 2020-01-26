import React, { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext)
  console.log(isLoggedIn)
  return (
    <Route
      {...rest}
      render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />)}
    />
  )
}
