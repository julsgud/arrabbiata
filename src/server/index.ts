import express from 'express'
import session from 'express-session'
import graphqlHTTP from 'express-graphql'
import passport from 'passport'
import uuid from 'uuid/v4'
import { GraphQLLocalStrategy, buildContext } from 'graphql-passport'

import { schema } from './schema'
import { getUsers } from './user/userDao'
const SESSION_SECRECT = 'bad secret'

passport.use(
  new GraphQLLocalStrategy((email, password, done) => {
    const users = getUsers()
    const matchingUser = users.find(user => email === user.email && password === user.password)
    const error = matchingUser ? null : new Error('no matching user')
    done(error, matchingUser)
  })
)

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
  graphqlHTTP((req: any, res) => {
    return {
      schema: schema,
      context: buildContext({ req, res }),
      graphiql: true,
    }
  })
)

app.listen(4000)
console.log('Running a GraphQL API server at 👅 http://localhost:4000/graphql')
