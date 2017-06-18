import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../ReactLogo'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
