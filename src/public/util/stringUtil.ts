import { User } from '../../server/user/userDao'

export function getUserName(user: User): String {
  return `${user.firstName} ${user.lastName}`
}
