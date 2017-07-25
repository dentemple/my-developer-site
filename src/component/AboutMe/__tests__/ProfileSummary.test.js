// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../ProfileSummary'

it('renders without crashing', () => {
  shallow(<MyComponent summary="test" />)
})
