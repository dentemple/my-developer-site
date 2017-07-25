// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../SectionHeading'

it('renders without crashing', () => {
  shallow(<MyComponent heading="Test" />)
})
