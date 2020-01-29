import to from 'await-to-js'
import { mongoDb } from './mongoDbClient'

export async function getOneDocumentFromCollectionByField(collection, field, value) {
  const [err, document] = await to(mongoDb.collection(collection).findOne({ [field]: value }))
  if (err || document === null) return new Error(err || 'Could not find document.')
  return normalizeDocumentId(document)
}

export function normalizeDocumentId(document) {
  return Object.assign({ id: document._id }, _.omit(document, ['_id']))
}
