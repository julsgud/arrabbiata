import { faunaClient, faunaQuery } from './faunaClient'

export function getFirstDocumentOnIndexById(index: string, id: string): Promise<any> {
  return faunaClient.query(faunaQuery.Get(faunaQuery.Match(faunaQuery.Index(index), id)))
}

export function getDocumentsOnIndexById(index: string, id: string): Promise<any> {
  return faunaClient.query(
    faunaQuery.Map(
      faunaQuery.Paginate(faunaQuery.Match(faunaQuery.Index(index), id)),
      faunaQuery.Lambda('DocRef', faunaQuery.Get(faunaQuery.Var('DocRef')))
    )
  )
}

export interface FaunaResult {
  data: Array<object>
}