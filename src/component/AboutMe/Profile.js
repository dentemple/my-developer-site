import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 25px;
  flex-basis: 70%;
  font-size: 0.9em;
  color: #474747;
  margin: 0px auto;
  text-align: left;
`

const SubHeading = styled.h3`
  font-family: "Exo", sans-serif;
  font-size: 1em;
  color: #474747;
  margin: 0;
`

const NBSpace = () => <span>&nbsp;</span>

const SummaryWrapper = styled.p`
  font-family: "Open Sans", sans-serif;
`

const Profile = ({ profile }) =>
  <Wrapper>
    <SubHeading>
      {profile.location}<NBSpace /> • <NBSpace />Freelancer since {profile.year}
    </SubHeading>
    <SummaryWrapper>{profile.summary}</SummaryWrapper>
    <SubHeading>For Clients:</SubHeading>
    <SubHeading>For Employers:</SubHeading>
  </Wrapper>

export default Profile
