// @flow

import React from 'react'
import { shallow, render } from 'enzyme'
import MyComponent from '../Home'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})

it('matches the snapshot', () => {
  const component = render(<MyComponent />)
  expect(component).toMatchSnapshot()
})
