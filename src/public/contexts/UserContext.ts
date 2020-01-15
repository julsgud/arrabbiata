import { createContext } from 'react'
import { User } from '../../server/user/userDao'

const defaultUser = {
  id: '1',
  googleId: '2',
  email: 'someEmail@thatmail.com',
  firstName: 'There',
  lastName: 'You',
}

export const UserContext = createContext<User>(defaultUser)
