// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Section'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
