import { User } from '../../server/daos/user/userDao'

export function getUserName(user: User): String {
  return `${user.firstName} ${user.lastName}`
}
