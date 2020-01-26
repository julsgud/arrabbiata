import React from 'react'
import { useCurrentUserQuery, useUserDataQuery } from '../../../generated/graphql'
import { GqlError } from '../GqlError/GqlError'

export function UserDataFetcher({ children }) {
  const {
    data: { currentUser },
  } = useCurrentUserQuery()
  const { loading, error } = useUserDataQuery({ variables: { userId: currentUser.id } })

  if (loading) return <div> Loading </div>
  if (error) return <GqlError error={error} />

  return <>{children}</>
}
