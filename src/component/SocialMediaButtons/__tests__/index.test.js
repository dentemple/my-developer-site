// @flow

import React from 'react'
import { shallow, render } from 'enzyme'
import MyComponent from '../index'

it('renders without crashing', () => {
  shallow(<MyComponent color="#333333" />)
})

it('matches the snapshot', () => {
  const component = render(<MyComponent color="#333333" />)
  expect(component).toMatchSnapshot()
})
