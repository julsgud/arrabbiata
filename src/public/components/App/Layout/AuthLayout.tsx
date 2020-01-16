import React from 'react'
import { Redirect, Route } from 'react-router'
import { Login } from '../../Login/Login'

export function AuthLayout() {
  return (
    <>
      <Redirect from="/auth" to="/auth/login" exact />
      <Route path="/auth/login" component={Login} />
    </>
  )
}
