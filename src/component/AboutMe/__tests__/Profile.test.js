import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../Profile'

it('renders without crashing', () => {
  shallow(<MyComponent profile={{}} />)
})
