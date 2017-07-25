import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: Transparent;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  outline: none;
`

const StyledLink = styled.a`color: white;`

const SocialMediaButton = props =>
  <StyledButton>
    <StyledLink
      href={props.link}
      aria-label={`Navigate to ${props.destination} profile`}>
      {props.children}
    </StyledLink>
  </StyledButton>

export default SocialMediaButton
