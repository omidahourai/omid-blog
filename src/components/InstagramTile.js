import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaHeart } from 'icons'

const Likes = styled.span`
  color: #FFF;
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
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  transition: opacity 0.25s ease-out;
  z-index: 2;
  position: absolute;
`
const Tile = styled.li`
  margin: 0;
  position: relative;
  list-style-type: none;
  &:hover {
    ${Overlay} {
      opacity: 0.3;
    }
  }
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

export default props => (
  <Tile key={props.key}>
    <OverlayLink href={props.link} target={'_blank'} rel={'noopener noreferrer'}>
      <FaInstagram color={'#FFF'} size={'2rem'} />
      <Likes>
        <FaHeart color={'#FFF'} size={'1rem'} />
        <span>{props.likes}</span>
      </Likes>
    </OverlayLink>
    <Overlay />
    <img src={props.url} alt={props.text} title={props.text} />
  </Tile>
)