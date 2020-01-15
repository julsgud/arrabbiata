import { createContext } from 'react'

interface AuthContextInterface {
  isLoggedIn: boolean
}

const defaultValue = {
  isLoggedIn: false,
}

export const AuthContext = createContext<AuthContextInterface>(defaultValue)
