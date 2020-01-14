export interface User {
  id: String
  googleId: String
  firstName: String
  lastName: String
  email: String
}

const users = [
  {
    id: '1',
    googleId: '4',
    firstName: 'Maurice',
    lastName: 'Moss',
    email: 'maurice@moss.com',
    password: 'asdfasdf',
  },
  {
    id: '2',
    googleId: '3',
    firstName: 'Roy',
    lastName: 'Trenneman',
    email: 'roy@trenneman.com',
    password: 'imroy',
  },
]

export function getUsers() {
  return users
}

export function addUser(user: any) {
  return users.push(user)
}
