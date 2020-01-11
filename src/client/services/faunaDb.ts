import faunadb from 'faunadb'

export const client = new faunadb.Client({ secret: window.FAUNA_CLIENT_SECRET })
export const q = faunadb.query