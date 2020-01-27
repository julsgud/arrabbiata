import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Layout } from './Layout/Layout'
import { Gatekeeper } from '../Gatekeeper/Gatekeeper'
import { GET_TIMER } from '../../gql/queries/timer'
import {
  TIMER_DEFAULT_CATEGORY,
  TIMER_DIRECTION,
  TIMER_LIMITS_IN_SECONDS,
} from '../Timer/Timer.util'

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
          setCycleCategory: (_, args, { cache }): null => {
            const { timer } = cache.readQuery({ query: GET_TIMER })
            const newTimerData = { ...timer, selectedCategoryId: args.categoryId }
            cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })
            return null
          },
          stopTimer: (_, __, { cache }): null => {
            const { timer } = cache.readQuery({ query: GET_TIMER })
            const newTimerData = { ...timer, currentTimeInSeconds: 0, isTimerRunning: false }
            cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })
            return null
          },
          setCurrentTime: (a, args, { cache }): null => {
            const { timer } = cache.readQuery({ query: GET_TIMER })
            const newTimerData = { ...timer, currentTimeInSeconds: args.timeInSeconds }
            cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })
            return null
          },
          toggleIsRunning: (_, __, { cache }): null => {
            const { timer } = cache.readQuery({ query: GET_TIMER })
            const newTimerData = { ...timer, isTimerRunning: !timer.isTimerRunning }
            cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })
            return null
          },
        },
      },
    })

    const defaultTimerObject = {
      id: '0',
      isTimerRunning: false,
      currentTimeInSeconds: 0,
      timerDirection: TIMER_DIRECTION.UP,
      selectedCategoryId: TIMER_DEFAULT_CATEGORY,
      timeLimitInSeconds: TIMER_LIMITS_IN_SECONDS.NONE,
      __typename: 'Timer',
    }

    cache.writeQuery({
      query: GET_TIMER,
      data: {
        timer: defaultTimerObject,
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
