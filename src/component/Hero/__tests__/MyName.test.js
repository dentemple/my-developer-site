// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../MyName'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
