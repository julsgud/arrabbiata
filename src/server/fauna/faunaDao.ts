import { faunaClient, faunaQuery } from '../services/faunaDb'

export function getAllUsers() {
  console.log('getting users')
  return faunaClient.query(allUsersQuery()).then(result => {
    console.log('my result ******', result)
    return result
  })
}

function allUsersQuery() {
  return faunaQuery.Get(faunaQuery.Ref(faunaQuery.Collection('users')))
}
