import faunadb from 'faunadb'

export const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SERVER_SECRET || '' })
export const faunaQuery = faunadb.query
export const queryFauna = faunaClient.query
export const Get = faunaQuery.Get
export const Match = faunaQuery.Match
export const Index = faunaQuery.Index