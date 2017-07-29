// @flow

import React from 'react'
import { shallow, render } from 'enzyme'
import MyComponent from '../index'

it('renders without crashing', () => {
  shallow(<MyComponent forHire={true} />)
})

it('matches the snapshot', () => {
  const component = render(<MyComponent forHire={true} />)
  expect(component).toMatchSnapshot()
})
