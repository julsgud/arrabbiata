import React, { ReactNode } from 'react'
import { useCurrentUserQuery, useUserDataQuery } from '../../../generated/graphql'
import { GQLError } from '../GqlError/GqlError'

interface UserDataFetcherProps {
  children: ReactNode
}

export const UserDataFetcher: React.FC<UserDataFetcherProps> = ({ children }) => {
  const {
    // @ts-ignore
    data: { currentUser },
  } = useCurrentUserQuery()
  const { loading, error } = useUserDataQuery({ variables: { userId: currentUser.id } })

  if (loading) return <div> Loading </div>
  if (error) return <GQLError error={error} />

  return <>{children}</>
}
