// @flow

import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './react-logo.svg'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const StyledImage = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`
const ReactLogo = () => <StyledImage src={logo} />

export default ReactLogo
