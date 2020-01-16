import { faunaClient, faunaQuery } from './faunaClient'

export function getDocumentByIndexAndId(index: string, id: string): Promise<any> {
  return faunaClient.query(
    faunaQuery.Get(faunaQuery.Match(faunaQuery.Index(index), id))
  )
}
