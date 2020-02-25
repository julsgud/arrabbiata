import {
  getDocumentsFromCollectionByQuery,
  insertDocumentIntoCollection,
  MongoDbFieldQuery,
} from '../../services/mongodb/mongoDao'
import { CYCLE_COLLECTION } from '../../services/fauna/collectionNames'

export async function saveCycle(
  userId: string,
  lengthInSeconds: number,
  createdAt: string,
  categoryIds: string[],
  taskIds: string[],
  notes: string
) {
  const cycle = {
    categoryIds,
    createdAt: new Date(createdAt),
    lengthInSeconds,
    notes,
    taskIds,
    userId,
  }
  return await insertDocumentIntoCollection(CYCLE_COLLECTION, cycle)
}

export async function getCycles(
  userId: string,
  startDate: string,
  endDate: string,
  categoryId: string,
  taskId: string
) {
  let query: MongoDbFieldQuery = {
    userId,
  }

  if (startDate || endDate) {
    query.createdAt = {
      "$gte": new Date(startDate),
      "$lt": new Date(endDate),
    }
  }

  if (categoryId) query.categoryId = categoryId
  if (taskId) query.taskId = taskId

  return await getDocumentsFromCollectionByQuery(CYCLE_COLLECTION, query)
}
