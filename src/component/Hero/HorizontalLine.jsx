// @flow

import styled from 'styled-components'

const HorizontalLine = styled.hr`
  padding: 0;
  margin: 0 auto;
  border: none;
  border-top: medium double #ffffff;
  color: #ffffff;
  text-align: center;
  width: 35%;

  &:after {
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    -webkit-transform: rotate(40deg);
    -moz-transform: rotate(40deg);
    transform: rotate(40deg);
    transition: all 0.5s;
  }

  @media only screen and (max-width: 480px) {
    &:after {
      font-size: 1em;
    }
  }
`

export default HorizontalLine
