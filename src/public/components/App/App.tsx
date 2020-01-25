import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Layout } from './Layout/Layout'
import { Gatekeeper } from '../Gatekeeper/Gatekeeper'
import {GET_TIMER} from "../../gql/queries/timer";

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
          stopTimer: (_, __, { cache }): null => {
            const { timer } = cache.readQuery({ query: GET_TIMER })
            const newTimerData = { ...timer, currentTimeInSeconds: 0, isRunning: false }
            cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })
            return null
          },
          setCurrentTimeInSeconds: (a, args, { cache }): null => {
            const { timer } = cache.readQuery({ query: GET_TIMER })
            const newTimerData = { ...timer, currentTimeInSeconds: args.time }
            cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })
            return null
          },
          toggleIsRunning: (_, __, { cache }): null => {
            const { timer } = cache.readQuery({ query: GET_TIMER })
            const newTimerData = { ...timer, isRunning: !timer.isRunning }
            cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })
            return null
          },
        },
      },
    })

    const timer = {
      id: '0',
      isRunning: false,
      currentTimeInSeconds: 0,
      __typename: 'Timer',
    }

    cache.writeQuery({
      query: GET_TIMER,
      data: {
        timer
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
