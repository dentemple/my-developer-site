// @flow

import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
`

const ProfileSummary = ({ summary }: { summary: string }) =>
  <StyledText>
    {summary}
  </StyledText>

export default ProfileSummary
