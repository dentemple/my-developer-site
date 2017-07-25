// @flow

import React from 'react'
import styled from 'styled-components'
import image from './self-image.jpg'

const StyledImage = styled.img`
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  max-width: 275px;
`

const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const ResumeImage = () =>
  <StyledDiv>
    <StyledImage alt="Profile photo" src={image} />
  </StyledDiv>

export default ResumeImage
