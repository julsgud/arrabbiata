import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER_DATA } from '../../gql/queries/userData'

export function UserDataFetcher({ children }) {
  const { user } = useContext(UserContext)
  const { loading, error } = useQuery(GET_USER_DATA, { variables: { userId: user.id } })

  if (loading) return <div> Loading </div>
  if (error) return <div> Error </div>

  return <>{children}</>
}
