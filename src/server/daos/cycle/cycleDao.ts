import { insertDocumentIntoCollection } from '../../services/mongodb/mongoDao'
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
    createdAt,
    lengthInSeconds,
    notes,
    taskIds,
    userId,
  }
  return await insertDocumentIntoCollection(CYCLE_COLLECTION, cycle)
}
