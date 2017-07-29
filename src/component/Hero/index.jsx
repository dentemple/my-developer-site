// @flow

import React from 'react'

import Container from './Container'
import GithubRibbon from './GithubRibbon'

import MyName from './MyName'
import MyTagline from './MyTagline'
import HorizontalLine from './HorizontalLine'
import ForHire from './ForHire'

const Hero = ({ forHire }: { forHire: boolean }) =>
  <Container>
    <GithubRibbon />
    <ForHire forHire={forHire} />
    <MyName />
    <HorizontalLine />
    <MyTagline />
  </Container>

export default Hero
