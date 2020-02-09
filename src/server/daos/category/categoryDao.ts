import to from 'await-to-js'
import { CATEGORIES_BY_USER_ID_INDEX } from '../../services/fauna/indexNames'
import { throwError } from '../../util/errorHandler'
import { FaunaResult, getDocumentsOnIndexById } from '../../services/fauna/faunaDao'
import { Category } from '../../../generated/graphql'

export async function getCategoriesByUserIdFromFauna(userId: string): Promise<Category | Error> {
  const [err, response] = await to(getDocumentsOnIndexById(CATEGORIES_BY_USER_ID_INDEX, userId))
  if (err) throwError(err)
  return (response.data.length && response.data.map((result: FaunaResult) => result.data)) || []
}

