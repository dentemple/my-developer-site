import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
`

const ProfileSummary = ({ summary }) =>
  <Wrapper>
    {summary}
  </Wrapper>

export default ProfileSummary
