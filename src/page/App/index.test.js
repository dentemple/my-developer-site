import React from 'react'
import { render } from 'enzyme'
import MyComponent from './index'

it('renders without crashing', () => {
  render(<MyComponent />)
})
