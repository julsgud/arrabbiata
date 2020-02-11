import React, { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface NavigationProps {
  children: ReactNode
}

const NavigationWrapper = styled.div`
  width: 100%;
`

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext)

  if (!isLoggedIn) return <>{children}</>

  return (
    <>
      <NavigationWrapper>
        <Link to="/app/home"> Home </Link>
        <Link to="/app/settings"> Settings </Link>
      </NavigationWrapper>
      {children}
    </>
  )
}
