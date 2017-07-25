// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../LinkedIn'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
