import React from 'react'
import styled from 'styled-components'
import ProfileTag from './ProfileTag'
import ProfileSummary from './ProfileSummary'
import ProfileSkills from './ProfileSkills'

const Wrapper = styled.div`
  color: #474747;
  text-align: left;
  font-size: 0.9em;
  margin: 0px;
  margin-left: 20px;
`

const Profile = ({ profile }) =>
  <Wrapper>
    <ProfileTag location={profile.location} year={profile.year} />
    <ProfileSummary summary={profile.summary} />
    <ProfileSkills text="For Potential Clients" skills={profile.clientSkills} />
    <ProfileSkills
      text="For Potential Employers"
      skills={profile.employerSkills}
    />
  </Wrapper>

export default Profile
