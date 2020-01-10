import faunadb from 'client/services/faunaDb'

export const client = new faunadb.Client({ secret: window.FAUNA_CLIENT_SECRET })
export const q = faunadb.query