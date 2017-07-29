// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../ForHire'

it('renders without crashing', () => {
  shallow(<MyComponent forHire={true} />)
})
