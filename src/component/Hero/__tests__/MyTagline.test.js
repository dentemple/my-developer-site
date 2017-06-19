// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../MyTagline'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
