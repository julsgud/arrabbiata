require('dotenv').config()
import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_DB_URL || ''
export const mongoDbClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export let mongoDb
mongoDbClient
  .connect()
  .then(async () => {
    mongoDb = await mongoDbClient.db('Project0')
    console.log('🌿 MongoDB: Connected')
  })
  .catch(err => {
    console.log(err)
  })

