// @flow

import React from 'react'
import { shallow, render } from 'enzyme'
import MyComponent from '../index'

import PROFILE from '../../../data/profile'

it('renders without crashing', () => {
  shallow(<MyComponent profile={PROFILE} />)
})

it('matches the snapshot', () => {
  const component = render(<MyComponent profile={PROFILE} />)
  expect(component).toMatchSnapshot()
})
