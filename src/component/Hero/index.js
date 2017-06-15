// @flow

import React from 'react'
import styled from 'styled-components'
import ReactLogo from './ReactLogo'
import GithubRibbon from './GithubRibbon'

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Hero = () =>
  <AppHeader>
    <GithubRibbon />
    <ReactLogo />
    <h2>Welcome to React</h2>
  </AppHeader>

export default Hero
