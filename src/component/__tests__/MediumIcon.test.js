// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../MediumIcon'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
