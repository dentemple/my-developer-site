// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Heading'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
