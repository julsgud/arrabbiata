import React from 'react'

type LoginProps = {
  isSignedIn: Boolean
  setIsSignedIn: Function
}

export function Login({ isSignedIn, setIsSignedIn }: LoginProps) {
    console.log(setIsSignedIn)
  return <h1> Login {isSignedIn} </h1>
}
