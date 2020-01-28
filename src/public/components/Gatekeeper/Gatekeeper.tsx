import React, { ReactNode } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import {useCurrentUserQuery} from "../../../generated/graphql";
import {GQLError} from "../GqlError/GqlError";

interface GatekeeperProps {
  children: ReactNode
}

export const Gatekeeper: React.FC<GatekeeperProps> = ({ children }) => {
  const { loading, error, data } = useCurrentUserQuery()

  if (loading) return <div>Loading</div>
  if (error) return <GQLError error={error}/>

  const currentUser = data?.currentUser || null

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ isLoggedIn: !!currentUser }}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  )
}
