import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { Routes } from './Routes/Routes'
import { Gatekeeper } from '../Gatekeeper/Gatekeeper'

export const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

export function Providers() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Gatekeeper>
          <Routes />
        </Gatekeeper>
      </Router>
    </ApolloProvider>
  )
}
