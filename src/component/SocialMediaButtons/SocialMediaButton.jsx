// @flow

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: Transparent;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  outline: none;
  transition-property: transform;
  transition-duration: 0.3s;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`

const StyledLink = styled.a`color: ${({ color }: { color: string }) => color};`

const SocialMediaButton = ({
  children,
  color,
  destination,
  link
}: {
  children: any,
  color: string,
  destination: string,
  link: string
}) =>
  <StyledButton>
    <StyledLink
      color={color}
      href={link}
      aria-label={`Navigate to ${destination} profile`}>
      {children}
    </StyledLink>
  </StyledButton>

export default SocialMediaButton
