// @flow

import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.li`
  font-size: 0.8em;
  text-align: center;
  margin: 3px 5px;
  padding: 2px 4px;
  color: #333333;
  background-color: #d8e9f3;
  list-style: none;
`
const Skill = ({ skill }: { skill: string }) =>
  <StyledItem>
    {skill}
  </StyledItem>

export default Skill
