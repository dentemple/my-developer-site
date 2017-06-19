import React from 'react'
import styled from 'styled-components'
import image from './self-image.jpg'

const Image = styled.img`
  border: 1px solid black;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  max-width: 100%;
`

const Wrapper = styled.div`
  padding: 25px;
  position: relative;
  flex-direction: column;
  flex-basis: 30%;
`

const ResumeImage = () =>
  <Wrapper>
    <Image alt="Profile photo" src={image} />
  </Wrapper>

export default ResumeImage
