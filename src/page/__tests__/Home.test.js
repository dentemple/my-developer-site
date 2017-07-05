// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Home'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
