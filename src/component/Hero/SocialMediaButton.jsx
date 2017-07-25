import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  background-color: Transparent;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  outline: none;
`

const ExternalLink = styled.a`color: white;`

const SocialMediaButton = props =>
  <Wrapper>
    <ExternalLink
      href={props.link}
      aria-label={`Navigate to ${props.destination} profile`}>
      {props.children}
    </ExternalLink>
  </Wrapper>

export default SocialMediaButton
