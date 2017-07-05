import React from 'react'
import { Row } from 'react-flexbox-grid'
import SubHeading from './SubHeading'
import Skill from './Skill'

const ProfileSkills = ({ text, skills }) =>
  <div>
    <SubHeading>
      {text}
    </SubHeading>
    <Row>
      {skills.map((skill, index) => {
        return (
          <Skill key={index}>
            {skill}
          </Skill>
        )
      })}
    </Row>
  </div>

export default ProfileSkills
