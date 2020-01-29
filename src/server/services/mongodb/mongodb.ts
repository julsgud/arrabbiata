require('dotenv').config()
import {MongoClient} from 'mongodb'

const uri = process.env.MONGO_DB_URL
export const mongoDbClient = new MongoClient(uri, { useNewUrlParser: true });

export let mongoDB

mongoDbClient.connect(err => {
  console.log(err)
  mongoDB = mongoDbClient.db('Project0')
});
