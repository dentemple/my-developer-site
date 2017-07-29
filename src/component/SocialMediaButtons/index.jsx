// @flow

import React from 'react'

import NBSpace from '../NBSpace'
import SocialMediaButton from './SocialMediaButton'
import TwitterIcon from './Icons/Twitter'
import LinkedInIcon from './Icons/LinkedIn'
import MediumIcon from './Icons/Medium'

const SocialMediaButtons = ({ color }: { color: string }) =>
  <span>
    <SocialMediaButton
      color={color}
      destination="Twitter"
      link="https://twitter.com/dentemple">
      <TwitterIcon />
    </SocialMediaButton>
    <NBSpace />
    <SocialMediaButton
      color={color}
      destination="Twitter"
      link="https://www.linkedin.com/in/dentemple/">
      <LinkedInIcon />
    </SocialMediaButton>
    <NBSpace />
    <SocialMediaButton
      color={color}
      destination="Twitter"
      link="https://medium.com/@dentemple">
      <MediumIcon />
    </SocialMediaButton>
  </span>

export default SocialMediaButtons
