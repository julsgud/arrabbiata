require('dotenv').config()
import express from 'express'
import session from 'express-session'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'
import passport from 'passport'
import uuid from 'uuid/v4'
import { schema } from './schema'
import { runPassport } from './util/passportUtil'

const SESSION_SECRECT = 'bad secret'

runPassport()

const app = express()
const corsOptions = {
  origin: `http://localhost:${process.env.CLIENT_PORT}`,
  credentials: true,
}

app.use(cors(corsOptions))

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

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:4000/graphql',
    failureRedirect: 'http://localhost:4000/graphql',
  })
)

app.use(
  '/graphql',
  graphqlHTTP((req: any, res) => {
    return {
      schema: schema,
      context: {
        user: req.user,
      },
      graphiql: true,
    }
  })
)

app.listen(process.env.API_PORT)
console.log(`👅 GraphQL API at http://localhost:${process.env.API_PORT}/graphql`)
