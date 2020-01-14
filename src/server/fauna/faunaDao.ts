import to from 'await-to-js'
import { faunaQuery } from '../services/faunaDb'
import {User} from "../user/userDao";
import {throwError} from "../util/errorHandler";

const USERS_BY_EMAIL_INDEX = 'users_by_email'

export async function getUserByEmail(email: string): User {
  const [err, user] = await to(faunaQuery.Get(faunaQuery.Match(faunaQuery.Index(USERS_BY_EMAIL_INDEX), email)))
  if (err) return throwError(err)
  return user
}
