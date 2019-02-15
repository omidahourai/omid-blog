import React from 'react'
import { slice, map, result } from 'lodash'
import styled from 'styled-components'
import { FaInstagram, FaHeart } from 'common/icons'

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
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  transition: opacity 0.25s ease-out;
  z-index: 2;
  position: absolute;
`

const Wrapper = styled.ul`
  margin: 0;
  display: flex;
  height: 180px;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  & img {
    height: 100%;
  }

  & li {
    height: 180px;
    margin: 0;
    min-width: 180px;
    position: relative;
    list-style-type: none;
    &:hover {
      ${Overlay} {
        opacity: 0.3;
      }
    }
  }

  & a {
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
  }
`

export const InstagramBanner = ({ feedData }) => {
  const imageData = map(feedData, item => {
    let text = result(item, 'caption.text') || ''
    if (text.length > 50) {
      text = text.slice(0, 50) + '...'
    }
    return {
      text,
      key: item.id,
      url: item.images.standard_resolution.url,
      width: item.images.standard_resolution.width,
      height: item.images.standard_resolution.height,
      likes: item.likes.count,
      link: item.link,
    }
  })
  return (
    <Wrapper>
      {map(slice(imageData, 9), image => (
        <li key={image.key}>
          {/*<Tooltip
                  title="Welcome to React"
                  position="top"
                  duration="250"
                  hideOnClick="true"
                  inertia="true"
                  sticky="true"
                  stickyDuration="0"
                  touchHold="true"
                  arrow="true"
                  style={{
                    marginLeft: '50%',
                    marginTop: '-100',
                  }}>*/}
          <a href={image.link} target="_blank">
            <FaInstagram color="#FFF" size="2rem" />
            <Likes>
              <FaHeart color="#FFF" size="1rem" />
              <span>{image.likes}</span>
            </Likes>
          </a>
          {/*</Tooltip>*/}
          <Overlay />
          <img src={image.url} alt={image.text} title={image.text} />
        </li>
      ))}
    </Wrapper>
  )
}

export default InstagramBanner
