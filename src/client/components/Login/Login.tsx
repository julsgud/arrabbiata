import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { LoginWithGoogle } from './LoginWithGoogle'

export function Login() {
  const { isLoggedIn } = useContext(AuthContext)

  if (isLoggedIn) return <Redirect to="/home" />
  return (
    <>
      Plis <LoginWithGoogle />
    </>
  )
}
