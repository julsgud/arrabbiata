require('dotenv').config()
import passport from 'passport'
import GoogleStrategy, { IOAuth2StrategyOption } from 'passport-google-oauth'
import to from 'await-to-js'
import { getUserByEmail, getUserById } from '../daos/user/userDao'
import { User } from '../../generated/graphql'

export const googleAuthOptions: IOAuth2StrategyOption = {
  clientID: process.env.GOOGLE_AUTH_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET || '',
  callbackURL: process.env.GOOGLE_CALLBACK_URL || '',
}

// @ts-ignore
export async function googleAuthCallback(accessToken, refreshToken, profile, done) {
  console.log(profile)
  const userEmail = (profile.emails && profile.emails[0] && profile.emails[0].value) || null

  if (!userEmail) {
    done(new Error('User not found'), null)
  }

  console.log(userEmail)
  const [err, user] = await to(getUserByEmail(userEmail))

  console.log(err)
  if (err) {
    done('No user registered with that email', null)
    return
  }

  done(null, user)
  return
  // const newUser = {
  //   id: uuid(),
  //   googleId: profile.id,
  //   firstName: profile.name.givenName,
  //   lastName: profile.name.familyName,
  //   email: profile.emails && profile.emails[0] && profile.emails[0].value,
  // }
  //
  // console.log(newUser)
  // // @ts-ignore
  // users.push(newUser)
  // done(null, newUser)
}

export function runPassport() {
  passport.serializeUser((user: User, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id: string, done) => {
    const user = await getUserById(id)
    done(null, user)
  })

  passport.use(new GoogleStrategy.OAuth2Strategy(googleAuthOptions, googleAuthCallback))
}
