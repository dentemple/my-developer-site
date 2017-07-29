// @flow

import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../SocialMediaButton'

it('renders without crashing', () => {
  shallow(
    <MyComponent color="#333333" link="#" destination="test">
      <div />
    </MyComponent>
  )
})
