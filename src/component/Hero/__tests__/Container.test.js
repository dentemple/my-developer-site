// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Container'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
