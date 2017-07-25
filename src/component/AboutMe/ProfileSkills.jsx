// @flow

import React from 'react'
import { Row } from 'react-flexbox-grid'

import SubHeading from './SubHeading'
import Skill from './Skill'

const NotYetLoaded = () => <small>Loading Data</small>

const ProfileSkills = ({
  heading,
  skills
}: {
  heading: string,
  skills: Array<string>
}) =>
  <div>
    <SubHeading>
      {heading}
    </SubHeading>
    <Row>
      {skills
        ? skills.map((skill, index) => {
            return <Skill key={index} skill={skill} />
          })
        : <NotYetLoaded />}
    </Row>
  </div>

export default ProfileSkills
