// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../SectionHeader'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
