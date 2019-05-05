import React from 'react'
import { slice, map } from 'lodash'
import styled from 'styled-components'
import { FaInstagram, FaHeart } from 'icons'

const Likes = styled.span`
  color: #fff;
  display: block;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  margin-top: 2rem;
  transform: translate(-50%, -50%);
  & > svg {
    margin-right: 0.3rem;
  }
`
const Image = styled.img`
  margin: 0 auto 13px auto;
  display: block;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
`
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  transition: opacity 0.25s ease-out;
  z-index: 2;
  position: absolute;
`
const OverlayLink = styled.a`
  display: block;
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.25s ease-out;
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    opacity: 1;
  }
`
const Item = styled.li`
  margin: 0;
  position: relative;
  list-style-type: none;
  &:hover {
    ${Overlay} {
      opacity: 0.3;
    }
  }
`
const List = styled.ul`
  margin: 0;
  margin-left: 2px;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
`
export default props => (
  <List>
    {map(slice(props.instagram, 0, 9), image => (
      <Item key={image.key}>
        <OverlayLink href={image.link} target="_blank">
          <FaInstagram color="#FFF" size="2rem" />
          <Likes>
            <FaHeart color="#FFF" size="1rem" />
            <span>{image.likes}</span>
          </Likes>
        </OverlayLink>
        <Overlay />
        <Image src={image.url} alt={image.text} title={image.text} />
      </Item>
    ))}
  </List>
)
