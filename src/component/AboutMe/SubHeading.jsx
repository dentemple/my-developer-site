// @flow

import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'

const StyledHeading = styled.h3`
  font-family: "Exo", sans-serif;
  font-size: 0.9em;
  margin: 10px 0;
  padding: 0;
`

const SubHeading = ({ children }: { children: any }) =>
  <Row>
    <StyledHeading>
      {children}
    </StyledHeading>
  </Row>

export default SubHeading
