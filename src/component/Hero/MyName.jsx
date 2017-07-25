// @flow

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  font-size: 3em;
  padding: 0;
  margin: 30px auto;
`

const Text = () => <span>Den Temple</span>
const NBSpace = () => <span>&nbsp;</span>
const Lace = () => <span>{`{`}</span>
const Race = () => <span>{`}`}</span>

const MyName = () =>
  <Wrapper>
    <Lace /><NBSpace /><Text /><NBSpace /><Race />
  </Wrapper>

export default MyName
