const users = [
  {
    id: '1',
    firstName: 'Maurice',
    lastName: 'Moss',
    email: 'maurice@moss.com',
    password: 'abcdefg',
  },
  {
    id: '2',
    firstName: 'Roy',
    lastName: 'Trenneman',
    email: 'roy@trenneman.com',
    password: 'imroy',
  },
]

export function getUsers() {
  return users
}

export function addUser(user:any) {
  return users.push(user)
}