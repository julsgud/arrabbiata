import React from 'react'
import styled from 'styled-components'
import { Timer } from '../Timer/Timer'
import { GoogleLogin } from 'react-google-login'

const Container = styled.div`
  font-family: 'Kulim Park', sans-serif;
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  padding: 1rem 1rem;
  background-color: #2d2c29;
  color: white;
`

const clientId = '368054029252-bdk0lvgo8aa9l44veb8h6p1p96m39pn6.apps.googleusercontent.com'
const responseGoogle = (response: object) => {
    console.log(response);
}

export function App() {


  return (
    <Container>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <Timer />
    </Container>
  )
}
