import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import {useCurrentUserQuery} from "../../../generated/graphql";
import {GqlError} from "../GqlError/GqlError";

export function Gatekeeper({ children }) {
  const { loading, error, data } = useCurrentUserQuery()

  if (loading) return <div>Loading</div>
  if (error) return <GqlError error={error}/>

  const currentUser = data?.currentUser || null

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ isLoggedIn: !!currentUser }}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  )
}
