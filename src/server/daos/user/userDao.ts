import to from 'await-to-js'
import { throwError } from '../../util/errorHandler'
import { USERS_BY_EMAIL_INDEX, USERS_BY_ID_INDEX } from '../../services/fauna/indexNames'
import { getFirstDocumentOnIndexById } from '../../services/fauna/faunaDao'
import { User } from '../../../generated/graphql'
import { getDocumentFromCollectionByField } from '../../services/mongodb/mongoDao'

export async function getUserByEmailFromFauna(email: string): Promise<User | Error> {
  const [err, response] = await to(getFirstDocumentOnIndexById(USERS_BY_EMAIL_INDEX, email))
  if (err) throwError(err)
  return response && response.data
}

export async function getUserById(userId: string): Promise<User | Error> {
  const [err, response] = await to(getFirstDocumentOnIndexById(USERS_BY_ID_INDEX, userId))
  if (err) throwError(err)
  return response.data
}

export async function getUserByEmail(email: string): Promise<User | Error> {
  const [err, response] = await to(getDocumentFromCollectionByField('users', 'email', email))
  console.log('err in mongodb', err)
  console.log(response)
  if (err) return throwError(err)
  return response
}
