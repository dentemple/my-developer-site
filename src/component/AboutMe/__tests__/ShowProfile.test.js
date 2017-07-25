// @flow

import React from 'react'
import { shallow } from 'enzyme'

import MyComponent from '../ShowProfile'
import profile from '../../../data/profile'

it('renders without crashing', () => {
  shallow(<MyComponent profile={profile} />)
})
