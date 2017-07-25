// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Skill'

it('renders without crashing', () => {
  shallow(<MyComponent skill="test" />)
})
