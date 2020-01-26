import { useCurrentUserQuery, useUserDataQuery } from '../../generated/graphql'

export function useCurrentUserData() {
  const {
    data: { currentUser },
  } = useCurrentUserQuery()
  const {
    data: { userData },
  } = useUserDataQuery({ variables: { userId: currentUser.id } })

  return {
    ...currentUser,
    ...userData,
  }
}
