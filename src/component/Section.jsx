// @flow

import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 50px auto 50px;
  padding: 20px 10px;
  max-width: 1000px;
  line-height: 1.6; }
  section a {
    color: #474747; }
  section a:visited {
    color: #474747; }
  box-sizing: border-box;
  animation: margin 0.5s;

  @media only screen and (max-width: 480px) {
    margin: 10px auto 10px;
    font-size: 0.9em;
  }
`

const Section = ({ children }: { children: any }) =>
  <StyledSection>
    {children}
  </StyledSection>

export default Section
