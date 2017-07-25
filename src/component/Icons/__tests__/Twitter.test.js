// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Twitter'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
