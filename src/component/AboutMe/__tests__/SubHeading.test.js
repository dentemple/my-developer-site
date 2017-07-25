// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../SubHeading'

it('renders without crashing', () => {
  shallow(
    <MyComponent>
      <div />
    </MyComponent>
  )
})
