import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'

import { Layout } from './Layout/Layout'
import { Gatekeeper } from '../Gatekeeper/Gatekeeper'

export const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
})

let client: ApolloClient<NormalizedCacheObject>

export function App() {
  useEffect(() => {
    const cache = new InMemoryCache()
    client = new ApolloClient({
      cache,
      link,
    })

    cache.writeData({
      data: {
        isRunning: false,
        isOnCycle: true,
      }
    })

  }, [])

  return (
    <ApolloProvider client={client}>
      <Router>
        <Gatekeeper>
          <Layout />
        </Gatekeeper>
      </Router>
    </ApolloProvider>
  )
}
