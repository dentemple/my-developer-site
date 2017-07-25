// @flow

import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
`

const ImageLink = styled.a``

const GithubRibbon = () => {
  const githubLink = 'https://github.com/dentemple/my-developer-site'
  const imageSrc =
    'https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67'
  const dataSrc =
    'https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png'
  return (
    <ImageLink href={githubLink}>
      <StyledImage
        src={imageSrc}
        data-canonical-src={dataSrc}
        alt="Navigate to this project on Github"
      />
    </ImageLink>
  )
}

export default GithubRibbon
