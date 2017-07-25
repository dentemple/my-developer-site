// @flow

import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import type { Profile } from '../../types'

import Section from '../Section'
import ResumeImage from './ResumeImage'
import ShowProfile from './ShowProfile'

const AboutMe = ({ profile }: { profile: Profile }) =>
  <Section>
    <Grid fluid>
      <Row>
        <Col xs={12} sm={4}>
          <ResumeImage />
        </Col>
        <Col xs={12} sm={8}>
          <ShowProfile profile={profile} />
        </Col>
      </Row>
    </Grid>
  </Section>

export default AboutMe
