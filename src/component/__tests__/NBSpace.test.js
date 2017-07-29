// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../NBSpace'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
