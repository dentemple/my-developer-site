import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h2`
  text-align: center;
  color: #474747;
`

const NBSpace = () => <span>&nbsp;</span>
const Lace = () => <span>{'{'}</span>
const Race = () => <span>{'}'}</span>

const SectionHeader = ({ name }) => {
  return (
    <Wrapper>
      <Lace /><NBSpace />{name}<NBSpace /><Race />
    </Wrapper>
  )
}

export default SectionHeader
