import React from 'react'
import styled from 'styled-components'
import { FacebookShareButton } from 'components/Button'
import { TwitterShareButton } from 'components/Button'
import { PinterestShareButton } from 'components/Button'
import { LinkShareButton } from 'components/Button'
// import { InstagramShareButton } from 'components/InstagramShareButton'

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:before {
    right: 100%;
    margin-right: 15px;
  }
  &:after {
    left: 100%;
    margin-left: 15px;
  }

  &:before,
  &:after {
    border-color: #e8e8e8;
    content: '';
    position: absolute;
    height: 1px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    top: 50%;
    width: 1000px;
    box-sizing: border-box;
  }
`
export default props => (
  <Wrapper>
    <FacebookShareButton
      tooltip={{ title: props.facebookTitle }}
      link={{
        ...props.linkStyles,
        href: props.facebookUrl,
        alt: props.facebookTitle,
        title: props.facebookTitle,
      }}
    />
    <TwitterShareButton
      tooltip={{ title: props.twitterTitle }}
      link={{
        ...props.linkStyles,
        href: props.twitterUrl,
        alt: props.twitterTitle,
        title: props.twitterTitle,
      }}
    />
    <PinterestShareButton
      tooltip={{ title: props.pinterestTitle }}
      link={{
        ...props.linkStyles,
        href: props.pinterestUrl,
        title: props.pinterestTitle,
        alt: props.pinterestTitle,
      }}
    />
    <LinkShareButton url={props.url} link={props.linkStyles} />
  </Wrapper>
)
