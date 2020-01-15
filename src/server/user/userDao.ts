import to from 'await-to-js'
import { faunaClient, faunaQuery, Get, Index, Match, queryFauna } from '../services/faunaDb'
import { throwError } from '../util/errorHandler'
import { USERS_BY_EMAIL_INDEX, USERS_BY_ID_INDEX } from '../fauna/indexNames'

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

export async function getUserByEmail(email: string): Promise<User | Error> {
  const [err, response] = await to(
    faunaClient.query(
      faunaQuery.Get(faunaQuery.Match(faunaQuery.Index(USERS_BY_EMAIL_INDEX), email))
    )
  )
  if (err) throwError(err)
  return response && response.data
}

export async function getUserById(id: string): Promise<User> {
  const [err, response] = await to(
    faunaClient.query(faunaQuery.Get(faunaQuery.Match(faunaQuery.Index(USERS_BY_ID_INDEX), id)))
  )
  if (err) throwError(err)
  return response.data
}
