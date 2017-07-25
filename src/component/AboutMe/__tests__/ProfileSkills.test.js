// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../ProfileSkills'

it('renders without crashing', () => {
  shallow(<MyComponent heading="test" skills={['t', 'e', 's', 't']} />)
})
