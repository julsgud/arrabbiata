import React, { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import { Redirect, Route } from 'react-router'

interface PrivateRouteProps {
  component: any
  path: string
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, path }) => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <Route
      path={path}
      render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />)}
    />
  )
}
