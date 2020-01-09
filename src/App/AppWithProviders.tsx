import ApolloClient from 'apollo-client'
import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { App } from './App'
import { Login } from '../Login/Login'

let cachedClient = unknown

export const getApolloClient = () => {
  if (cachedClient) return cachedClient

  const httpLink = createHttpLink({
    uri: '/graphql',
  })

  // const authLink = setContext((_, { headers }) => {
  //   // get the authentication token from local storage if it exists
  //   const token = localStorage.getItem('token')
  //   // return the headers to the context so httpLink can read them
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : '',
  //     },
  //   }
  // })

  cachedClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })

  return cachedClient
}

export function AppWithProviders() {
  const [isSignedIn, setIsSignedIn] = useState(false)

 if (isSignedIn) return <App/>

 return <Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
}
