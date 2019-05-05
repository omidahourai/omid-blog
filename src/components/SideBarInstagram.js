import React from 'react'
import styled from 'styled-components'
import Tile from 'components/InstagramTile'

const List = styled.ul`
  margin: 0;
  margin-left: 2px;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
`

const InstagramTile = styled(Tile)`
  & img {
    margin: 0 auto 13px auto;
    display: block;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
`

export default props => (
  <List>
    {props.instagram.map(image => (
      <InstagramTile {...image} />
    ))}
  </List>
)
