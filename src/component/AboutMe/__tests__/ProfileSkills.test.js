import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../ProfileSkills'

it('renders without crashing', () => {
  shallow(<MyComponent text="test" skills={['t', 'e']} />)
})
