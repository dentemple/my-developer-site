import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../TextWrapper'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
