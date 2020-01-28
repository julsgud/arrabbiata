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
  console.log(response)
  if (err) return throwError('Error creating cycle.')
  return response
}
