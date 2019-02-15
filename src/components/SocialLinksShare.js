import React, { Component } from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  TwitterShareButton,
  InstagramShareButton,
  LinkShareButton,
} from 'components'

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
export class SocialLinksShare extends Component {
  state = {}
  render = () => (
      <Wrapper>
        <FacebookShareButton
          tooltip={{ title: 'Share on Facebook' }}
          link={{
            width: '2.2rem',
            height: '2.2rem',
            margin: '0 4px',
            padding: '0.6rem',
            href: encodeURI(
              `https://facebook.com/sharer/sharer.php?u=${decodeURIComponent(
                `http://omid.com/article/${this.props.id}/`
              )}`
            ),
            alt: `Share on Facebook`,
            title: `Share on Facebook`,
          }}
        />
        <TwitterShareButton
          tooltip={{ title: 'Share on Twitter' }}
          link={{
            width: '2.2rem',
            height: '2.2rem',
            margin: '0 4px',
            padding: '0.6rem',
            href: encodeURI(
              `https://twitter.com/share?text=Check out this article by @omidahourai: ${this.props.title}&hashtags=${(this.props.tags || []).join(
                ','
              )}&url=${`http://omid.com/article/${this.props.id}/`}`
            ),
            alt: 'Share on Twitter',
            title: 'Share on Twitter',
          }}
        />
        <InstagramShareButton
          tooltip={{ title: 'Share on Pinterest' }}
          link={{
            width: '2.2rem',
            height: '2.2rem',
            margin: '0 4px',
            padding: '0.6rem',
            href: `https://pinterest.com/pin/create/button/?url=http://omid.com/article/${this.props.id}/&media=${this.props.imageUrl}`,
            title: 'Share on Pinterest',
            alt: 'Share on Pinterest',
          }}
        />
        <LinkShareButton
          url={`http://omid.com/article/${this.props.id}/`}
          link={{
            width: '2.2rem',
            height: '2.2rem',
            margin: '0 4px',
            padding: '0.6rem',
          }}
        />
      </Wrapper>
    )
  }

export default SocialLinksShare
