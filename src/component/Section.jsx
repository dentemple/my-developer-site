import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0px auto;
  padding: 20px 10px;
  max-width: 1000px;
  line-height: 1.6; }
  section a {
    color: #474747; }
  section a:visited {
    color: #474747; }
  box-sizing: border-box;
`

const Section = ({ children }) =>
  <Wrapper>
    {children}
  </Wrapper>

export default Section
