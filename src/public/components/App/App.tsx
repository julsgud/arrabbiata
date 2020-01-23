import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { Layout } from './Layout/Layout'
import { Gatekeeper } from '../Gatekeeper/Gatekeeper'
import { GET_IS_RUNNING } from '../Timer/Timer'

export const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
})

export function App() {
  const [client, setClient] = useState()

  useEffect(() => {
    const cache = new InMemoryCache()
    const apolloClient = new ApolloClient({
      cache,
      link,
      resolvers: {
        Mutation: {
          toggleIsRunning: (a, b, { cache }) => {
            const previousData = cache.readQuery({ query: GET_IS_RUNNING })
            const data = { isRunning: !previousData.isRunning }
            cache.writeQuery({ query: GET_IS_RUNNING, data })
          },
        },
      },
    })

    cache.writeData({
      data: {
        timer: {
          isRunning: false,
          isOnCycle: true,
        },
      },
    })

    setClient(apolloClient)
  }, [])

  if (client === undefined) return <div>Loading...</div>

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
