import { User } from '../../generated/graphql'

export function getUserName(user: User): String {
  return `${user.firstName} ${user.lastName}`
}
