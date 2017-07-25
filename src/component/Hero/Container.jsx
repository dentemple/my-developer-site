// @flow

import styled from 'styled-components'
import img from './adj-hero-image.jpg'

const Container = styled.header`
  background-image: url(${img});
  background-color: #d8e9f3;
  background-blend-mode: multiply;
  background-attachment: fixed;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  max-width: 100%;
  height: 600px;
  background-size: cover;
  background-position: 50% 50%;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.72), 0 0 15px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  resize: vertical;
  overflow: auto;
`

export default Container
