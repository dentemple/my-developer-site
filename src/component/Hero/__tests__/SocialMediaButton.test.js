import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../SocialMediaButton'

const ChildComponent = () => <div />

it('renders without crashing', () => {
  shallow(<MyComponent link="#"> <ChildComponent /> </MyComponent>)
})
