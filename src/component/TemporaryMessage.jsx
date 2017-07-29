// @flow

import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`font-size: large;`

const TemporaryMessage = () =>
  <StyledText>
    <span role="img" aria-label="sparkles emoji">
      ✨
    </span>
    &nbsp;&nbsp;Currently rebuilding this website. Please come back
    soon!&nbsp;&nbsp;
    <span role="img" aria-label="sparkles emoji">
      ✨
    </span>
  </StyledText>

export default TemporaryMessage
