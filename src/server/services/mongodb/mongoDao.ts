import to from 'await-to-js'
import _ from 'lodash'
import { mongoDb } from './mongoDbClient'
import { ObjectId } from 'mongodb'

export async function getFirstDocumentFromCollectionByField(
  collection: string,
  field: string,
  value: any
): Promise<any> {
  const [err, document] = await to(mongoDb.collection(collection).findOne({ [field]: value }))
  if (err || document === null) throw new Error(err || 'Could not find document.')
  return normalizeDocumentId(document)
}

export async function getDocumentFromCollectionByField(
  collection: string,
  field: string,
  value: any
): Promise<Object | Error> {
  const [err, document] = await to(
    mongoDb
      .collection(collection)
      .find({ [field]: value })
      .toArray()
  )
  if (err || document === null) throw new Error(err || 'Could not find document.')
  return normalizeDocumentId(document)
}

export async function getDocumentFromCollectionById(collection: string, id: string): Promise<any> {
  const _id = new ObjectId(id)
  const [err, document] = await to(mongoDb.collection(collection).findOne({ _id }))
  if (err || document === null) throw new Error(err || 'Could not find document.')
  return normalizeDocumentId(document)
}

export function normalizeDocumentId(document) {
  return Object.assign({ id: document._id }, _.omit(document, ['_id']))
}
