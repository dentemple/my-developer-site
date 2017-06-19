// @flow

import React from 'react'
import styled from 'styled-components'
import SocialMediaButton from './SocialMediaButton'
import TwitterIcon from '../TwitterIcon'
import LinkedInIcon from '../LinkedInIcon'
import MediumIcon from '../MediumIcon'

const Wrapper = styled.h2`
  font-size: 1.4em;
  padding: 0;
  margin: 0;
`

const NBSpace = () => <span>&nbsp;</span>
const Text = () => <span>Software<NBSpace />Developer</span>
const Separator = () => <span><NBSpace />| </span>

const MyTagline = () =>
  <Wrapper>
    <Text /><Separator />

    <SocialMediaButton
      destination="Twitter"
      link="https://twitter.com/dentemple">
      <TwitterIcon />
    </SocialMediaButton>
    <NBSpace />
    <SocialMediaButton
      destination="Twitter"
      link="https://www.linkedin.com/in/dentemple/">
      <LinkedInIcon />
    </SocialMediaButton>
    <NBSpace />
    <SocialMediaButton
      destination="Twitter"
      link="https://medium.com/@dentemple">
      <MediumIcon />
    </SocialMediaButton>

  </Wrapper>

export default MyTagline
