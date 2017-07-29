// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../HorizontalLine'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
