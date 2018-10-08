import React, { Component } from 'react'
import { Tooltip } from 'react-tippy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { FaFacebook, FaTwitter, FaPinterestP, WebLinkIcon } from 'common/icons'
import { AnchorCircleIcon } from 'common/components'

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
const ShareButton = styled(AnchorCircleIcon)`
  border: 1px solid;
  border-radius: 50%;
  border-color: #e8e8e8;
  padding: 0;
  width: 2.2rem;
  height: 2.2rem;
  margin: 0 4px;
  background-color: #f8f8f8;
  transition: 0.25s all ease-out;
  & svg {
    padding: 0.6rem;
    & > * {
      fill: #333;
    }
  }

  &:active,
  &:focus {
    border: 1px solid #e8e8e8;
  }
  &:hover {
    background-color: #ccc;
    & svg > * {
      fill: #fff !important;
    }
    &.facebook {
      background-color: #3b5998;
      border-color: #3b5998;
    }
    &.twitter {
      background-color: #00aced;
      border-color: #00aced;
    }
    &.pinterest {
      background-color: #c92228;
      border-color: #c92228;
    }
    &.weblink {
      background-color: #ff9022;
      border-color: #ff9022;
    }
  }
`
const FacebookButton = styled(ShareButton)`
  &:hover {
    background-color: #3b5998;
    border-color: #3b5998;
  }
`
const TwitterButton = styled(ShareButton)`
  &:hover {
    background-color: #00aced;
    border-color: #00aced;
  }
`
const PinterestButton = styled(ShareButton)`
  &:hover {
    background-color: #c92228;
    border-color: #c92228;
  }
`
const WeblinkButton = styled(ShareButton)`
  &:hover {
    background-color: #ff9022;
    border-color: #ff9022;
  }
`

export class SocialLinksShare extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let { id, slug, title, category, imageUrl, tags } = this.props
    tags = tags || []
    return (
      <Wrapper>
        <Tooltip
          title="Share on Facebook"
          position="top"
          duration="150"
          hideOnClick="true"
          sticky="true"
          stickyDuration="0"
          touchHold="true"
          size="small"
          arrow="true"
          style={{ paddingTop: 5 }}
        >
          <FacebookButton
            href={encodeURI(
              `https://facebook.com/sharer/sharer.php?u=${decodeURIComponent(
                `http://omid.com/article/${id}/`
              )}`
            )}
            rel="external"
            target="_blank"
            title="Share on Facebook"
          >
            <FaFacebook />
          </FacebookButton>
        </Tooltip>
        <Tooltip
          title="Share on Twitter"
          position="top"
          duration="150"
          hideOnClick="true"
          sticky="true"
          stickyDuration="0"
          touchHold="true"
          size="small"
          arrow="true"
          style={{ paddingTop: 5 }}
        >
          <TwitterButton
            href={encodeURI(
              `https://twitter.com/share?text=Check out this article by @omidahourai: ${title}&hashtags=${tags.join(
                ','
              )}&url=${`http://omid.com/article/${id}/`}`
            )}
            rel="external"
            target="_blank"
            title="Share on Twitter"
          >
            <FaTwitter />
          </TwitterButton>
        </Tooltip>
        <Tooltip
          title="Share on Pinterest"
          position="top"
          duration="150"
          hideOnClick="true"
          sticky="true"
          stickyDuration="0"
          touchHold="true"
          size="small"
          arrow="true"
          style={{ paddingTop: 5 }}
        >
          <PinterestButton
            href={`https://pinterest.com/pin/create/button/?url=http://omid.com/article/${id}/&media=${imageUrl}`}
            rel="external"
            target="_blank"
            alt="Share on Pinterest"
          >
            <FaPinterestP />
          </PinterestButton>
        </Tooltip>
        <Tooltip
          title={this.state.copiedUrl ? 'Copied!' : 'Copy Link'}
          position="top"
          duration="150"
          hideOnClick="true"
          sticky="true"
          stickyDuration="0"
          touchHold="true"
          size="small"
          arrow="true"
          style={{ paddingTop: 5 }}
        >
          <CopyToClipboard
            text={`http://omid.com/article/${id}/`}
            onCopy={() => {
              clearTimeout(this.state.copiedUrl)
              this.setState({
                copiedUrl: setTimeout(() => {
                  this.setState({ copiedUrl: false })
                }, 700),
              })
            }}
          >
            <WeblinkButton alt="Copy Link">
              <WebLinkIcon />
            </WeblinkButton>
          </CopyToClipboard>
        </Tooltip>
      </Wrapper>
    )
  }
}

export default SocialLinksShare
