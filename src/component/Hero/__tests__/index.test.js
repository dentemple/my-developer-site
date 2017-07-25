// @flow

import React from 'react'
import { shallow, render } from 'enzyme'

import MyComponent from '../index'
import profile from '../../../data/profile'

it('renders without crashing', () => {
  shallow(<MyComponent profile={profile} />)
})

it('matches the snapshot', () => {
  const component = render(<MyComponent profile={profile} />)
  expect(component).toMatchSnapshot()
})
