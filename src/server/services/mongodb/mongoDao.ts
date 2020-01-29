import { mongoDb } from './mongoDbClient'

export async function getDocumentFromCollectionByField(collection, field, value) {
  return mongoDb.collection(collection).find({[field]: value})
}
