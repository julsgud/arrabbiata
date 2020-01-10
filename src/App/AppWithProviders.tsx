import React, { useState } from 'react'

import { App } from './App'
import { Login } from '../Login/Login'

export function AppWithProviders() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  if (isSignedIn) return <App />

  return <Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
}
