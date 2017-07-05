import React from 'react'
import SubHeading from './SubHeading'

const NBSpace = () => <span>&nbsp;</span>

const ProfileTag = ({ location, year }) =>
  <SubHeading>
    {location}
    <NBSpace /> • <NBSpace />Freelancer since {year}
  </SubHeading>

export default ProfileTag
