// @flow

import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-size: 3em;
  padding: 0;
  margin: 30px auto;
  transition: all 0.5s;

  @media only screen and (max-width: 480px) {
    font-size: 2em;
  }
`

const Text = () => <span>Den Temple</span>
const NBSpace = () => <span>&nbsp;</span>
const Lace = () => <span>{`{`}</span>
const Race = () => <span>{`}`}</span>

const MyName = () =>
  <StyledHeading>
    <Lace />
    <NBSpace />
    <Text />
    <NBSpace />
    <Race />
  </StyledHeading>

export default MyName
