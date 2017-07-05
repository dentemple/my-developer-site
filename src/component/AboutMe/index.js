import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Section from '../Section'
import ResumeImage from './ResumeImage'
import Profile from './Profile'

const AboutMe = ({ profile }) =>
  <Section>
    <Grid fluid>
      <Row>
        <Col xs={12} sm={4}>
          <ResumeImage />
        </Col>
        <Col xs={12} sm={8}>
          <Profile profile={profile} />
        </Col>
      </Row>
    </Grid>
  </Section>

export default AboutMe
