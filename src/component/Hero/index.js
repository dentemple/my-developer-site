import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Image = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`

const Hero = () =>
  <AppHeader>
    <Image src={logo} />
    <h2>Welcome to React</h2>
  </AppHeader>

export default Hero
