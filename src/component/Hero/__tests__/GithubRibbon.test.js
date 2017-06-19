// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../GithubRibbon'

it('renders without crashing', () => {
  shallow(<MyComponent />)
})
