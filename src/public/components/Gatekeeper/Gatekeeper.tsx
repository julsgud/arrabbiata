import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from '../../gql/queries/currentUser'
import { AuthContext } from '../../contexts/AuthContext'

export function Gatekeeper({ children }) {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <div>Loading</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  const isLoggedIn = !!data.currentUser

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>
    </React.Fragment>
  )
}
