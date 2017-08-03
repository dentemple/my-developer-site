// @flow

import React from 'react'
import styled from 'styled-components'

const StyledText = styled.a`
  font-family: "Cookie", cursive;
  font-size: 2em;
  color: inherit;
  text-decoration: none;
  text-shadow: -1px -1px 0 #111, 1px -1px 0 #111, -1px 1px 0 #111,
    1px 1px 0 #111;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 10%;
  left: 5%;
  overflow: hidden;
  -ms-transform: rotate(-20deg);
  -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  transition: all 0.5s;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    color: #bada55;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.3em;
    left: 10%;
  }
`

const ForHire = ({ forHire }: { forHire: boolean }) =>
  <div>
    {forHire
      ? <StyledText href="#contact">Now Available for Hire!</StyledText>
      : <div />}
  </div>

export default ForHire
