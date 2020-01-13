import faunadb from 'faunadb'

export const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SERVER_HASHED_SECRET || '' })
export const faunaQuery = faunadb.query