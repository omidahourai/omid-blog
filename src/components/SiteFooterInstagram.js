import React from 'react'
import styled from 'styled-components'
import Tile from 'components/InstagramTile'

const Wrapper = styled.ul`
  margin: 0;
  display: flex;
  height: 180px;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`

const InstagramTile = styled(Tile)`
  height: 180px;
  min-width: 180px;
  & img {
    height: 100%;
  }
`

export default props => (
  <Wrapper>
    {props.instagram.map(image => (
      <InstagramTile {...image} floor={true} />
    ))}
  </Wrapper>
)