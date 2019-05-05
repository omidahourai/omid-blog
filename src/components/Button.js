import React, { Component } from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'
import { Tooltip } from 'react-tippy'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { FaFacebook } from 'icons/facebook'
import { FaTwitter } from 'icons/twitter'
import { FaPinterestP } from 'icons/pinterest-p'
import { FaInstagram } from 'icons/instagram'
import { FaLinkedin } from 'icons/linkedin'
import { FaEnvelopeO } from 'icons/envelope-o'
import { WebLinkIcon } from 'icons/weblink'

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
  kind: 'default',
}

const buttonTheme = {
  backgroundColor: theme('mode', {
    light: '#F8F8F8',
    dark: '#999999',
  }),
  borderColor: theme('mode', {
    light: '#E8E8E8',
    dark: '#999999',
  }),
  hover: {
    backgroundColor: theme.variants('mode', 'kind', {
      default: { light: '#CCCCCC', dark: '#CCCCCC' },
      facebook: { light: '#3B5998', dark: '#3B5998' },
      twitter: { light: '#00ACED', dark: '#00ACED' },
      instagram: { light: '#D62BFF', dark: '#D62BFF' },
      pinterest: { light: '#E60223', dark: '#E60223' },
      linkedin: { light: '#0E76A8', dark: '#0E76A8' },
    }),
    borderColor: theme.variants('mode', 'kind', {
      default: { light: '#E8E8E8', dark: '#E8E8E8' },
      facebook: { light: '#3B5998', dark: '#FFFFFF' },
      twitter: { light: '#00ACED', dark: '#FFFFFF' },
      instagram: { light: '#D62BFF', dark: '#FFFFFF' },
      pinterest: { light: '#E60223', dark: '#FFFFFF' },
      linkedin: { light: '#0E76A8', dark: '#FFFFFF' },
    }),
  },
}

export const ShareButton = styled.a`
  width: ${({ width }) => width || '2.6rem'};
  height: ${({ height }) => height || '2.6rem'};
  display: inline-block;
  border: 1px solid;
  border-radius: 50%;
  padding: 0;
  margin: ${({ margin }) => margin || '0 0.35rem'};
  border-color: ${buttonTheme.borderColor};
  background-color: ${buttonTheme.backgroundColor};
  transition: all 0.25s ease-out;
  &:hover {
    cursor: pointer;
    background-color: ${buttonTheme.hover.backgroundColor};
    border-color: ${buttonTheme.hover.borderColor};
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
ShareButton.defaultProps = {
  mode: 'light',
  kind: 'default',
}

export const FacebookShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    {console.log('propsddddd', ShareButton.props)}
    <ShareButton {...linkDefault} {...props.link} kind={'facebook'}>
      <FaFacebook />
    </ShareButton>
  </Tooltip>
)

export const TwitterShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    <ShareButton {...linkDefault} {...props.link} kind={'twitter'}>
      <FaTwitter />
    </ShareButton>
  </Tooltip>
)
export const PinterestShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    <ShareButton {...linkDefault} {...props.link} kind={'pinterest'}>
      <FaPinterestP />
    </ShareButton>
  </Tooltip>
)
export const InstagramShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    <ShareButton {...linkDefault} {...props.link} kind={'instagram'}>
      <FaInstagram />
    </ShareButton>
  </Tooltip>
)
export const LinkedinShareButton = props => (
  <Tooltip {...tooltipDefault} {...props.tooltip}>
    <ShareButton {...linkDefault} {...props.link} kind={'linkedin'}>
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
