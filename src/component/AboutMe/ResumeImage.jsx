// @flow

import React from 'react'
import styled from 'styled-components'
import image from './self-image.jpg'

const Image = styled.img`
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  max-width: 275px;
`

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const ResumeImage = () =>
  <Wrapper>
    <Image alt="Profile photo" src={image} />
  </Wrapper>

export default ResumeImage
