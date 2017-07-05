import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../ProfileTag'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
