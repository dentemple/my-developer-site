// @flow

import React from 'react'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'

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
`

const Section = ({ children }: { children: any }) =>
  <StyledSection>
    <SectionHeading heading="About Me" />
    {children}
  </StyledSection>

export default Section
