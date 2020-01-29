import { mongoDbClient } from './services/mongodb/mongoDbClient'

require('dotenv').config()
import express from 'express'
import path from 'path'
import session from 'express-session'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'
import passport from 'passport'
import uuid from 'uuid/v4'
import { schema } from './gql/schema'
import { runPassport } from './util/passportUtil'

runPassport()

const app = express()
const corsOptions = {
  origin: `${process.env.CLIENT_URL}`,
  credentials: true,
}
app.use(cors(corsOptions))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'), function(err) {
      if (err) res.status(500).send(err)
    })
  })
}

// Express Session
// for production use, cookie: { secure: true }
const SESSION_SECRECT = 'bad secret'
const sessionOptions = {
  genid: () => uuid(),
  secret: SESSION_SECRECT,
  resave: false,
  saveUninitialized: false,
}
app.use(session(sessionOptions))

// Passport Init
app.use(passport.initialize())
app.use(passport.session())

// Google Auth
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: process.env.CLIENT_URL,
  })
)

// GraphQL
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

const server = app.listen(process.env.API_PORT)
console.log(`👅 GraphQL: http://localhost:${process.env.API_PORT}/graphql`)

function gracefulShutdown() {
  mongoDbClient.close(() => console.log('Closed mongo db connection'))
  server.close()
  process.exit()
}

process.on('exit', gracefulShutdown)
process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
