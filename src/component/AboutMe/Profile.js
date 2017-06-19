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
  margin: 0;
`

const NBSpace = () => <span>&nbsp;</span>
const Detail = ({ location, year }) =>
  <SubHeading>
    {location}<NBSpace /> • <NBSpace />Freelancer since {year}
  </SubHeading>

const SummaryWrapper = styled.p`
  font-family: "Open Sans", sans-serif;
`

const Profile = ({ profile }) =>
  <Wrapper>
    <Detail location={profile.location} year={profile.year} />
    <SummaryWrapper>{profile.summary}</SummaryWrapper>
  </Wrapper>

export default Profile
