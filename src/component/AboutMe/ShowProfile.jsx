// @flow

import React from 'react'
import styled from 'styled-components'
import type { Profile } from '../../types'

import ProfileTag from './ProfileTag'
import ProfileSummary from './ProfileSummary'
import ProfileSkills from './ProfileSkills'

const StyledDiv = styled.div`
  color: #474747;
  text-align: left;
  font-size: 1em;
  margin: 0px;
  margin-left: 20px;
`

const ShowProfile = ({ profile }: { profile: Profile }) =>
  <StyledDiv>
    <ProfileTag location={profile.location} year={profile.year} />
    <ProfileSummary summary={profile.summary} />
    <ProfileSkills heading="For Clients" skills={profile.clientSkills} />
    <ProfileSkills heading="For Employers" skills={profile.employerSkills} />
  </StyledDiv>

export default ShowProfile
