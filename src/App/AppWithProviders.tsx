import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { App } from './App'
import { Login } from '../Login/Login'

export function AppWithProviders() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <ApolloProvider client={getApolloClient(isSignedIn, setIsSignedIn)}>
      {isSignedIn ? <App /> : <Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}
    </ApolloProvider>
  )
}
