import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from '../../gql/queries/currentUser'
import { AuthContext } from '../../contexts/AuthContext'
import { UserContext } from '../../contexts/UserContext'

export function Gatekeeper({ children }) {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <div>Loading</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  const currentUser = data.currentUser

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ isLoggedIn: !!currentUser }}>
        <UserContext.Provider value={data.currentUser}>{children}</UserContext.Provider>
      </AuthContext.Provider>
    </React.Fragment>
  )
}
