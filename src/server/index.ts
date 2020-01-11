import express from 'express'
import session from 'express-session'
import graphqlHTTP from 'express-graphql'
import passport from 'passport'
import uuid from 'uuid/v4'

import { schema } from './schema'
import { getUsers } from './user/userDao'

// Construct a schema, using GraphQL schema language

passport.serializeUser((user: any, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  const users = getUsers()
  const matchingUser = users.find(user => user.id === id)
  done(null, matchingUser)
})

const SESSION_SECRECT = 'bad secret'

const app = express()

app.use(express.static('dist'))

// for production use, cookie: { secure: true }
const sessionOptions = {
  genid: (req: any) => uuid(),
  secret: SESSION_SECRECT,
  resave: false,
  saveUninitialized: false,
}

app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())

app.use(
  '/graphql',
  graphqlHTTP((req:any, res) => ({
    schema: schema,
    context: {
      user: req.user || null,
      logout: () => req.logout(),
    },
    rootValue: {
      user: req.user || null,
      logout: () => req.logout(),
      hello: () => 'Hello world!',
    },
    graphiql: true,
  }))
)

app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
