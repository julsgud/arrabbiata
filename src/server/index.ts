import express from 'express'
import session from 'express-session'
const session = require('express-session')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
import uuid from 'uuid/v4';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!'
  },
}

const SESSION_SECRECT = 'bad secret';

const app = express()

app.use(express.static('dist'))

// for production use, cookie: { secure: true }

app.use(
  session({
    genid: (req: any) => uuid(),
    secret: SESSION_SECRECT,
    resave: false,
    saveUninitialized: false,
  })
)

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
