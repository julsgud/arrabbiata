import React from 'react'
import { useCurrentUserQuery, useUserDataQuery } from '../../../generated/graphql'
import { GqlError } from '../GqlError/GqlError'

export function UserDataFetcher({ children }) {
  const {
    data: { user },
  } = useCurrentUserQuery()
  const { loading, error } = useUserDataQuery({ variables: { userId: user.id } })

  if (loading) return <div> Loading </div>
  if (error) return <GqlError error={error} />

  return <>{children}</>
}
