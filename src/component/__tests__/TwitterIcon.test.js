// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../TwitterIcon'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
