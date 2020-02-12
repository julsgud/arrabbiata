import moment from 'moment'
import { insertDocumentIntoCollection } from '../../services/mongodb/mongoDao'

export const CATEGORY_COLLECTION = 'categories'

export async function saveCategory(userId: string, categoryName: string) {
  const category = {
    userId,
    categoryName,
    createdAt: moment().toISOString(),
  }

  return await insertDocumentIntoCollection(CATEGORY_COLLECTION, category)
}
