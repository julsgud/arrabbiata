import React from 'react'
import { useUserDataQuery } from '../../../generated/graphql'
import { GqlError } from '../GqlError/GqlError'

export function UserDataFetcher({ children }) {
  const { loading, error } = useUserDataQuery({ variables: { userId: '1' } })

  if (loading) return <div> Loading </div>
  if (error) return <GqlError error={error} />

  return <>{children}</>
}
