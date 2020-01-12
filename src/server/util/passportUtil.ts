require('dotenv').config()
import uuid from 'uuid/v4'
import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth'
import { getUsers } from '../user/userDao'

export const googleAuthOptions = {
  clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}

export function googleAuthCallback(accessToken, refreshToken, profile, done) {
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
  done(null, newUser)
}

export function runPassport() {
  passport.serializeUser((user: any, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    console.log('deserialize', id)
    const users = getUsers()
    const matchingUser = users.find(user => user.id === id)
    done(null, matchingUser)
  })

  passport.use(new GoogleStrategy.OAuth2Strategy(googleAuthOptions, googleAuthCallback))
}
