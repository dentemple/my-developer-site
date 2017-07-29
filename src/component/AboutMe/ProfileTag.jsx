// @flow

import React from 'react'
import SubHeading from './SubHeading'

const NBSpace = () => <span>&nbsp;</span>

const ProfileTag = ({ location, year }: { location: string, year: string }) =>
  <SubHeading>
    {location}
    <NBSpace /> • <NBSpace />
    {year ? `Freelancer since ${year}` : `Freelancer`}
  </SubHeading>

export default ProfileTag
