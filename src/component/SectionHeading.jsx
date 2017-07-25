// @flow

import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h2`
  margin: 0px auto 50px;
  text-align: center;
  color: #474747;
`

const NBSpace = () => <span>&nbsp;</span>
const Lace = () =>
  <span>
    {'{'}
  </span>
const Race = () =>
  <span>
    {'}'}
  </span>

const SectionHeader = ({ heading }: { heading: string }) => {
  return (
    <StyledHeading>
      <Lace />
      <NBSpace />
      {heading}
      <NBSpace />
      <Race />
    </StyledHeading>
  )
}

export default SectionHeader
