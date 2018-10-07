import React, { Component } from 'react'
import { Tooltip } from 'react-tippy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './styles.module.css'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelopeO,
} from 'common/icons'
import { ButtonCircleIcon } from 'common/components'

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
      <div className={`social-links ${styles.social}`}>
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
            <a
              className={`${styles.btn} ${styles.facebook}`}
              href={`http://facebook.com/${facebookHandle}`}
              target="_blank"
              rel="external"
              alt={`Like ${fullName} on Facebook`}
            >
              <FaFacebook />
            </a>
          </Tooltip>
        ) : (
          ''
        )}
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
            <a
              className={`${styles.btn} ${styles.twitter}`}
              href={`https://twitter.com/${twitterHandle}`}
              target="_blank"
              rel="external"
              title={`Follow ${fullName} on Twitter`}
              alt={`Follow ${fullName} on Twitter`}
            >
              <FaTwitter />
            </a>
          </Tooltip>
        ) : (
          ''
        )}
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
            <a
              className={`${styles.btn} ${styles.instagram}`}
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="external"
              title={`Follow ${fullName} on Instagram`}
              alt={`Follow ${fullName} on Instagram`}
            >
              <FaInstagram />
            </a>
          </Tooltip>
        ) : (
          ''
        )}
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
            <a
              className={`${styles.btn} ${styles.linkedin}`}
              href={`https://linkedin.com/in/${linkedinHandle}`}
              target="_blank"
              rel="external"
              title={`Follow ${fullName} on LinkedIn`}
              alt={`Follow ${fullName} on LinkedIn`}
            >
              <FaLinkedin />
            </a>
          </Tooltip>
        ) : (
          ''
        )}
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
              <ButtonCircleIcon
                className={`${styles.btn} ${styles.email}`}
                alt={`Email ${fullName}`}
              >
                <FaEnvelopeO />
              </ButtonCircleIcon>
            </CopyToClipboard>
          </Tooltip>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default SocialLinksAuthor
