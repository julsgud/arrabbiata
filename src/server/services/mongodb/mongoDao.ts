import to from 'await-to-js'
import _ from 'lodash'
import { mongoDb } from './mongoDbClient'
import { ObjectId } from 'mongodb'
import { handleError } from '../../util/errorHandler'

export async function getFirstDocumentFromCollectionByField(
  collection: string,
  field: string,
  value: any
): Promise<any> {
  const [err, document] = await to(mongoDb.collection(collection).findOne({ [field]: value }))
  if (err || document === null) throw new Error(err || 'Could not find document.')
  return removeUnderscoreFromDocumentId(document)
}

export async function insertDocumentIntoCollection(collection: string, document: object) {
  const [err, response] = await to(mongoDb.collection(collection).insertOne(document))
  if (err) return handleError(err, true)
  return removeUnderscoreFromDocumentId(response && response.ops[0])
}

export async function deleteDocumentFromCollectionById(collection: string, id) {
  const _id = new ObjectId(id)
  const [err] = await to(mongoDb.collection(collection).deleteOne({ _id }))
  if (err) return handleError(err, true)
  return
}

export async function updateDocumentById(
  collection: string,
  id: string,
  fieldToUpdate: string,
  value: any
) {
  const _id = new ObjectId(id)
  const [err] = await to(
    mongoDb.collection(collection).updateOne({ _id }, { $set: { [fieldToUpdate]: value } })
  )
  if (err) return handleError(err, true)
  return
}

export async function getDocumentsFromCollectionByField(
  collection: string,
  field: string,
  value: any
): Promise<Array<any> | Error> {
  const [err, documents] = await to(
    mongoDb
      .collection(collection)
      .find({ [field]: value, isArchived: false })
      .toArray()
  )
  if (err) return handleError(err, true)
  return removeUnderscoreFromDocumentsIds(documents)
}

export async function getDocumentFromCollectionById(collection: string, id: string): Promise<any> {
  const _id = new ObjectId(id)
  const [err, document] = await to(mongoDb.collection(collection).findOne({ _id }))
  if (err || document === null) throw new Error(err || 'Could not find document.')
  return removeUnderscoreFromDocumentId(document)
}

export function removeUnderscoreFromDocumentsIds(documents) {
  return Object.keys(documents).map(key => removeUnderscoreFromDocumentId(documents[key]))
}

export function removeUnderscoreFromDocumentId(document) {
  return Object.assign({ id: document._id }, _.omit(document, ['_id']))
}
