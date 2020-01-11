import React from 'react'
import { client, q } from '../services/faunaDb'

type LoginProps = {
  isSignedIn: Boolean
  setIsSignedIn: Function
}

export function Login({ isSignedIn, setIsSignedIn }: LoginProps) {
  const login = () => {
    client
      .query(
        q.Login(q.Match(q.Index('users_by_email'), 'alice@site.example'), {
          password: 'secret password',
        })
      )
      .then((res: object) => {
        console.log(res)
      })
      .catch((error: object) => {
        console.log(error)
      })
  }

  return (
    <div>
      Login pls cmon
      <button onClick={login}></button>
    </div>
  )
}
