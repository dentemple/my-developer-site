// @flow

import React from 'react'

import Container from './Container'
import GithubRibbon from './GithubRibbon'

import MyName from './MyName'
import MyTagline from './MyTagline'
import HorizontalLine from './HorizontalLine'

const Hero = ({ forHire }: { forHire: boolean }) =>
  <Container>
    <GithubRibbon />
    <MyName />
    <HorizontalLine />
    <MyTagline />
  </Container>

export default Hero
