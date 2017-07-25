// @flow

import React from 'react'
import type { Profile } from '../../types'

import Container from './Container'
import GithubRibbon from './GithubRibbon'
import TextWrapper from './TextWrapper'
import MyName from './MyName'
import MyTagline from './MyTagline'
import HorizontalLine from './HorizontalLine'

const Hero = ({ profile }: { profile: Profile }) =>
  <Container>
    <GithubRibbon />
    <TextWrapper>
      <MyName />
      <HorizontalLine />
      <MyTagline />
    </TextWrapper>
  </Container>

export default Hero
