// @flow

import React from 'react'
import styled from 'styled-components'

import NBSpace from '../NBSpace'
import SocialMediaButtons from '../SocialMediaButtons'

const StyledHeading = styled.h2`
  font-size: 1.4em;
  padding: 0;
  margin: 0 5px;
  transition: all 0.5s;

  @media only screen and (max-width: 480px) {
    font-size: 1em;
  }
`

const Title = () =>
  <span>
    Software<NBSpace />Developer
  </span>

const MyTagline = () =>
  <StyledHeading>
    <Title />
    <NBSpace />|
    <SocialMediaButtons color="#FFFFFF" />
  </StyledHeading>

export default MyTagline
