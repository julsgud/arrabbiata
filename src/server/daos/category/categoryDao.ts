import moment from 'moment'
import {
  deleteDocumentFromCollectionById,
  insertDocumentIntoCollection,
} from '../../services/mongodb/mongoDao'

export const CATEGORY_COLLECTION = 'categories'

export async function saveCategory(userId: string, categoryName: string) {
  const category = {
    userId,
    categoryName,
    createdAt: moment().toISOString(),
  }

  return await insertDocumentIntoCollection(CATEGORY_COLLECTION, category)
}

export async function deleteCategory(categoryId: string) {
  await deleteDocumentFromCollectionById(CATEGORY_COLLECTION, categoryId)
  return { id: categoryId }
}
