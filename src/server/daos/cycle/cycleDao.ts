import to from 'await-to-js'
import { CYCLE_COLLECTION } from '../../services/fauna/collectionNames'
import { createDocumentOnCollection } from '../../services/fauna/faunaDao'
import { throwError } from '../../util/errorHandler'

export async function createCycle(id, lengthInSeconds, userId, createdAt, categoryIds, taskIds) {
  const cycle = {
    id,
    lengthInSeconds,
    userId,
    createdAt,
    categoryIds,
    taskIds,
  }
  const [err, response] = await to(createDocumentOnCollection(CYCLE_COLLECTION, { data: cycle }))
  if (err) throwError(err)
  return response && response.data
}
