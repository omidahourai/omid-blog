import React, { Component } from 'react'
import styles from './styles.module.css'
import { Tooltip } from 'react-tippy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaFacebook, FaTwitter, FaPinterestP, WebLinkIcon } from 'common/icons'
import { AnchorCircleIcon, ButtonCircleIcon } from 'common/components'

export class SocialLinksShare extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let { id, slug, title, category, imageUrl, tags } = this.props
    tags = tags || []
    return (
      <div className={`social-share ${styles.share}`}>
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
          <AnchorCircleIcon
            className={`${styles.btn} ${styles.facebook}`}
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
          </AnchorCircleIcon>
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
          <AnchorCircleIcon
            className={`${styles.btn} ${styles.twitter}`}
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
          </AnchorCircleIcon>
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
          <AnchorCircleIcon
            className={`${styles.btn} ${styles.pinterest}`}
            href={`https://pinterest.com/pin/create/button/?url=http://omid.com/article/${id}/&media=${imageUrl}`}
            rel="external"
            target="_blank"
            alt="Share on Pinterest"
          >
            <FaPinterestP />
          </AnchorCircleIcon>
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
            <ButtonCircleIcon
              className={`${styles.btn} ${styles.weblink}`}
              alt="Copy Link"
            >
              <WebLinkIcon />
            </ButtonCircleIcon>
          </CopyToClipboard>
        </Tooltip>
      </div>
    )
  }
}

export default SocialLinksShare
