import to from 'await-to-js'
import { CATEGORIES_BY_USER_ID_INDEX } from '../../services/fauna/indexNames'
import { throwError } from '../../util/errorHandler'
import { getDocumentsOnIndexById } from '../../services/fauna/faunaDao'

export interface Category {
  id: String
  categoryName: String
  userId: String
  createdAt: String
  description: String
}

export async function getCategoriesByUserId(userId: string): Promise<Category | Error> {
  const [err, response] = await to(getDocumentsOnIndexById(CATEGORIES_BY_USER_ID_INDEX, userId))
  if (err) throwError(err)
  return response.data.length && response.data.map(result => result.data) || []
}
