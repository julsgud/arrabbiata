require('dotenv').config()
import express from 'express'
import session from 'express-session'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'
import passport from 'passport'
import uuid from 'uuid/v4'
import GoogleStrategy from 'passport-google-oauth'
import { schema } from './schema'
import { getUsers } from './user/userDao'
const SESSION_SECRECT = 'bad secret'

const googleAuthOptions = {
  clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}

passport.serializeUser((user: any, done) => {
  console.log('serialize', user)
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  console.log('deserialize', id)
  const users = getUsers()
  const matchingUser = users.find(user => user.id === id)
  done(null, matchingUser)
})

function googleAuthCallback(accessToken, refreshToken, profile, done) {
  console.log('user', profile)
  const users = getUsers()
  const matchingUser = users.find(user => user.googleId === profile.id)

  if (matchingUser) {
    done(null, matchingUser)
    return
  }

  const newUser = {
    id: uuid(),
    googleId: profile.id,
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
    email: profile.emails && profile.emails[0] && profile.emails[0].value,
  }
  // @ts-ignore
  users.push(newUser)
  console.log(users)
  done(null, newUser)
}

passport.use(new GoogleStrategy.OAuth2Strategy(googleAuthOptions, googleAuthCallback))

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
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

app.listen(4000)
console.log('Running a GraphQL API server at 👅 http://localhost:4000/graphql')
