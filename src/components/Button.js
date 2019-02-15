import React, { Component } from 'react'
import { Tooltip } from 'react-tippy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { theme } from 'common/styles'

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelopeO,
  WebLinkIcon,
} from 'common/icons'

const tooltipDefault = {
  title: 'Follow on Twitter',
  position: 'top',
  duration: '150',
  hideOnClick: 'true',
  sticky: 'true',
  stickyDuration: '0',
  touchHold: 'true',
  size: 'small',
  arrow: 'true',
  style: { paddingTop: 9 },
}
const linkDefault = {
  href: '#',
  target: '_blank',
  rel: 'external',
}

export const ShareButton = styled.a`
  width: ${({ width }) => width || '2.6rem'};
  height: ${({ height }) => height || '2.6rem'};
  display: inline-block;
  border: 1px solid;
  border-radius: 50%;
  border-color: #e8e8e8;
  padding: 0;
  margin: ${({ margin }) => margin || '0 0.35rem'};
  background-color: #f8f8f8;
  transition: all 0.25s ease-out;
  &:hover {
    background-color: ${({ bg }) => bg || '#CCC'};
    border-color: ${({ bg }) => bg || '#E8E8E8'};
    cursor: pointer;
    svg > * {
      fill: #fff;
    }
  }
  svg {
    padding: ${({ padding }) => padding || '0.7rem'};
    width: 100%;
    height: 100%;
    & > * {
      fill: #333;
    }
  }
  &:focus,
  &:active {
    outline: 0;
  }
`

export const FacebookShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    <ShareButton {...linkDefault} {...props.link} bg={`#3B5998`}>
      <FaFacebook />
    </ShareButton>
  </Tooltip>
)

export const TwitterShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    <ShareButton {...linkDefault} {...props.link} bg={`#00ACED`}>
      <FaTwitter />
    </ShareButton>
  </Tooltip>
)
export const InstagramShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    <ShareButton {...linkDefault} {...props.link} bg={`#D62BFF`}>
      <FaInstagram />
    </ShareButton>
  </Tooltip>
)
export const LinkedinShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    <ShareButton {...linkDefault} {...props.link} bg={`#C92228`}>
      <FaLinkedin />
    </ShareButton>
  </Tooltip>
)
export class EmailShareButton extends Component {
  state = {}
  render = () => (
    <Tooltip
      {...tooltipDefault}
      title={this.state.isCopied ? `Copied!` : `Copy Email`}
    >
      <CopyToClipboard
        text={this.props.email}
        onCopy={() => {
          clearTimeout(this.state.isCopied)
          this.setState({
            isCopied: setTimeout(() => {
              this.setState({ isCopied: false })
            }, 700),
          })
        }}
      >
        <ShareButton
          as={`button`}
          {...linkDefault}
          {...this.props.link}
          bg={`#FF9022`}
        >
          <FaEnvelopeO />
        </ShareButton>
      </CopyToClipboard>
    </Tooltip>
  )
}

export class LinkShareButton extends Component {
  state = {}
  render = () => (
    <Tooltip
      {...tooltipDefault}
      title={this.state.isCopied ? `Copied!` : `Copy Link`}
    >
      <CopyToClipboard
        text={this.props.url}
        onCopy={() => {
          clearTimeout(this.state.isCopied)
          this.setState({
            isCopied: setTimeout(() => {
              this.setState({ isCopied: false })
            }, 700),
          })
        }}
      >
        <ShareButton
          as={`button`}
          {...linkDefault}
          {...this.props.link}
          bg={`#FF9022`}
        >
          <WebLinkIcon />
        </ShareButton>
      </CopyToClipboard>
    </Tooltip>
  )
}
