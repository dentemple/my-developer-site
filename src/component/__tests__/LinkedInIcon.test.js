// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../LinkedInIcon'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
