// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Medium'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
