import moment from 'moment'
import { insertDocumentIntoCollection, updateDocumentById } from '../../services/mongodb/mongoDao'

export const CATEGORY_COLLECTION = 'categories'

export async function saveCategory(userId: string, categoryName: string) {
  const category = {
    userId,
    categoryName,
    createdAt: moment().toISOString(),
    isArchived: false,
  }
  return await insertDocumentIntoCollection(CATEGORY_COLLECTION, category)
}

export async function deleteCategory(categoryId: string) {
  await updateDocumentById(CATEGORY_COLLECTION, categoryId, 'isArchived', true)
  return { id: categoryId }
}
