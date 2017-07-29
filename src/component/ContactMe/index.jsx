// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import Section from '../Section'
import Heading from './Heading'

const StyledDiv = styled.div`
  font-family: Tahoma, sans-serif;
  text-align: left;
  margin: 0 auto;
  padding: 1% 3%;
  max-width: 50%;
  background-color: #eff0f1;
  border: 0.5px solid #999999;
  border-radius: 1%;
  animation: all 0.5s;

  @media only screen and (max-width: 480px) {
    max-width: 80%;
  }
`

const StyledInput = styled.input`
  font-family: Tahoma, sans-serif;
  font-size: 16px;
  width: 100%;
`
const StyledTextArea = styled.textarea`
  font-family: Tahoma, sans-serif;
  font-size: 16px;
  width: 100%;
  margin-bottom: 5px;
`

const InputContainer = styled.div`
  display: block;
  margin: 5px 0;
  padding: 2px;
`

type State = {|
  name: string,
  _replyto: string,
  message: string,
  messageSent: boolean,
  messageCount: number,
  emailValid: boolean,
  formValid: boolean
|}

class ContactMe extends Component {
  props: {
    email: string
  }
  state: State = {
    name: '',
    _replyto: '',
    message: '',
    messageSent: false,
    messageCount: 0,
    emailValid: false,
    formValid: false
  }
  handleChange(event: SyntheticInputEvent) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  render() {
    const { email } = this.props
    return (
      <Section>
        <StyledDiv>
          <form
            action={`//formspree.io/developer@dentemple.com`}
            id="contact"
            method="POST">
            <Heading />
            <InputContainer>
              <StyledInput
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={event => this.handleChange(event)}
                required
              />
            </InputContainer>
            <InputContainer>
              <StyledInput
                type="email"
                name="_replyto"
                placeholder="Your Email Address"
                onChange={event => this.handleChange(event)}
                required
              />
            </InputContainer>
            <InputContainer>
              <StyledTextArea
                name="message"
                placeholder="Your Message"
                maxlength={10000}
                onChange={event => this.handleChange(event)}
                required
              />
              <input type="hidden" name="_subject" value="Website contact" />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <input type="hidden" name="_next" value="//site.io/thanks.html" />
              <StyledInput type="submit" value="Send" />
            </InputContainer>
          </form>
        </StyledDiv>
      </Section>
    )
  }
}

export default ContactMe
