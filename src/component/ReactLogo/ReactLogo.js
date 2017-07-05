// @flow

import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Image = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`
const Logo = () => <Image src={logo} />

export default Logo
