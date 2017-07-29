// @flow

import React from 'react'
import styled from 'styled-components'
import HorizontalLine from './HorizontalLine'

const StyledHeading = styled.h3`font-weight: lighter; margin: 0; padding; 0`

const Heading = () =>
  <div>
    <StyledHeading>Contact Me</StyledHeading>
    <HorizontalLine />
  </div>

export default Heading
