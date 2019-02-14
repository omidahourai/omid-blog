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
} from 'common/icons'
import { ButtonCircleIcon } from 'common/components'

const Wrapper = styled.div`
  margin-top: 1rem;
`
const Button = styled.a`
  display: inline-block;
  border: 1px solid;
  border-radius: 50%;
  border-color: #e8e8e8;
  padding: 0;
  width: 2.6rem;
  height: 2.6rem;
  margin: 0 0.35rem;
  background-color: #f8f8f8;
  transition: all 0.25s ease-out;
  &:active,
  &:focus {
    border: 1px solid #ccc;
  }
  &:hover {
    background-color: #ccc;
    & svg > * {
      fill: #fff !important;
    }
  }
  & svg {
    padding: 0.7rem;
    width: 100%;
    height: 100%;
  }
  & svg > * {
    fill: #111;
  }
`
const ButtonFacebook = styled(Button)`
  &:hover {
    background-color: #3b5998;
    border-color: #3b5998;
  }
`
const ButtonTwitter = styled(Button)`
  &:hover {
    background-color: #00aced;
    border-color: #00aced;
  }
`
const ButtonInstagram = styled(Button)`
  &:hover {
    background-color: #d62bff;
    border-color: #d62bff;
  }
`
const ButtonLinkedin = styled(Button)`
  &:hover {
    background-color: #c92228;
    border-color: #c92228;
  }
`
const ButtonEmail = styled(ButtonCircleIcon)`
  display: inline-block;
  border: 1px solid;
  border-radius: 50%;
  border-color: #e8e8e8;
  padding: 0;
  width: 2.6rem;
  height: 2.6rem;
  margin: 0 0.35rem;
  background-color: #f8f8f8;
  transition: all 0.25s ease-out;
  & svg {
    padding: 0.7rem;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #ff9022;
    border-color: #ff9022;
    & svg > * {
      fill: #fff !important;
    }
  }
`

export class SocialLinksAuthor extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {
      facebookHandle,
      twitterHandle,
      instagramHandle,
      linkedinHandle,
      emailAddress,
      fullName,
    } = this.props
    return (
      <Wrapper>
        {facebookHandle ? (
          <Tooltip
            title="Like on Facebook"
            position="top"
            duration="150"
            hideOnClick="true"
            sticky="true"
            stickyDuration="0"
            touchHold="true"
            size="small"
            arrow="true"
            style={{ paddingTop: 9 }}
          >
            <ButtonFacebook
              href={`http://facebook.com/${facebookHandle}`}
              target="_blank"
              rel="external"
              alt={`Like ${fullName} on Facebook`}
            >
              <FaFacebook />
            </ButtonFacebook>
          </Tooltip>
        ) : null}
        {twitterHandle ? (
          <Tooltip
            title="Follow on Twitter"
            position="top"
            duration="150"
            hideOnClick="true"
            sticky="true"
            stickyDuration="0"
            touchHold="true"
            size="small"
            arrow="true"
            style={{ paddingTop: 9 }}
          >
            <ButtonTwitter
              href={`https://twitter.com/${twitterHandle}`}
              target="_blank"
              rel="external"
              title={`Follow ${fullName} on Twitter`}
              alt={`Follow ${fullName} on Twitter`}
            >
              <FaTwitter />
            </ButtonTwitter>
          </Tooltip>
        ) : null}
        {instagramHandle ? (
          <Tooltip
            title="Follow on Instagram"
            position="top"
            duration="150"
            hideOnClick="true"
            sticky="true"
            stickyDuration="0"
            touchHold="true"
            size="small"
            arrow="true"
            style={{ paddingTop: 9 }}
          >
            <ButtonInstagram
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="external"
              title={`Follow ${fullName} on Instagram`}
              alt={`Follow ${fullName} on Instagram`}
            >
              <FaInstagram />
            </ButtonInstagram>
          </Tooltip>
        ) : null}
        {linkedinHandle ? (
          <Tooltip
            title="Follow on Linkedin"
            position="top"
            duration="150"
            hideOnClick="true"
            sticky="true"
            stickyDuration="0"
            touchHold="true"
            size="small"
            arrow="true"
            style={{ paddingTop: 9 }}
          >
            <ButtonLinkedin
              href={`https://linkedin.com/in/${linkedinHandle}`}
              target="_blank"
              rel="external"
              title={`Follow ${fullName} on LinkedIn`}
              alt={`Follow ${fullName} on LinkedIn`}
            >
              <FaLinkedin />
            </ButtonLinkedin>
          </Tooltip>
        ) : null}
        {emailAddress ? (
          <Tooltip
            title={this.state.copiedEmail ? `Copied!` : `Copy Email`}
            position="top"
            duration="150"
            hideOnClick="true"
            sticky="true"
            stickyDuration="0"
            touchHold="true"
            size="small"
            arrow="true"
            style={{ paddingTop: 9 }}
          >
            <CopyToClipboard
              text={emailAddress}
              onCopy={() => {
                clearTimeout(this.state.copiedEmail)
                this.setState({
                  copiedEmail: setTimeout(() => {
                    this.setState({ copiedEmail: false })
                  }, 700),
                })
              }}
            >
              <ButtonEmail alt={`Email ${fullName}`}>
                <FaEnvelopeO />
              </ButtonEmail>
            </CopyToClipboard>
          </Tooltip>
        ) : null}
      </Wrapper>
    )
  }
}

export default SocialLinksAuthor
