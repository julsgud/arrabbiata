import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useQuery } from '@apollo/react-hooks'
import { USER_DATA_QUERY } from '../../gql/queries/userData'

export function UserDataFetcher({ children }) {
  const { user } = useContext(UserContext)
  const { loading, error, data } = useQuery(USER_DATA_QUERY, { variables: { userId: user.id } })

  if (loading) return <div> Loading </div>
  if (error) return <div> Error </div>

  const { categories = [] } = data.getUserData

  return <UserContext.Provider value={{ user, categories }}>{children}</UserContext.Provider>
}
