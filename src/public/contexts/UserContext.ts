import { createContext } from 'react'
import { User } from '../../server/daos/user/userDao'
import { Category } from '../../server/daos/category/categoryDao'

interface UserContextInterface {
  user: User
  categories?: [Category]
}

const defaultUser = {
  id: '1',
  googleId: '1',
  email: 'example@hmail.com',
  firstName: 'there',
  lastName: 'you',
}

export const UserContext = createContext<UserContextInterface>({
  user: defaultUser,
})
