import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Layout } from './Layout/Layout'
import { Gatekeeper } from '../wrappers/Gatekeeper/Gatekeeper'
import { GET_TIMER } from '../../gql/queries/timer'
import { DEFAULT_TIMER_OBJECT } from '../Home/Timer/Timer.util'
import { mutationResolvers } from '../../gql/resolvers/mutationResolvers'
import { Navigation } from '../Navigation/Navigation'

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
        Mutation: mutationResolvers,
      },
    })

    cache.writeQuery({
      query: GET_TIMER,
      data: {
        timer: DEFAULT_TIMER_OBJECT,
      },
    })

    setClient(apolloClient)
  }, [])

  if (client === undefined) return <div>Loading...</div>

  return (
    <ApolloProvider client={client}>
      <Router>
        <Gatekeeper>
          <Navigation>
            <Layout />
          </Navigation>
        </Gatekeeper>
      </Router>
    </ApolloProvider>
  )
}
