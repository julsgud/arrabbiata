import { useCurrentUserQuery, useUserDataQuery } from '../../generated/graphql'

export function useCurrentUserData() {
  const {
  // @ts-ignore
    data: { currentUser },
  } = useCurrentUserQuery()
  const {
    // @ts-ignore
    data: { userData },
  } = useUserDataQuery({ variables: { userId: currentUser.id } })

  return {
    ...currentUser,
    ...userData,
  }
}
