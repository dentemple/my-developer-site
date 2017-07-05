import { injectGlobal } from 'styled-components'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-size: 1.1em;
    font-family: 'Open Sans', sans-serif;
  }

  hr:after {
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    -webkit-transform: rotate(40deg);
    -moz-transform: rotate(40deg);
    transform: rotate(40deg);
  }
`

const theme = {}

export default theme
