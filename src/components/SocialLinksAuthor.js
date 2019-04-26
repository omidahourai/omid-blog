import React, { Component } from 'react'
import styled from 'styled-components'
import { FacebookShareButton } from 'components/Button'
import { TwitterShareButton } from 'components/Button'
import { InstagramShareButton } from 'components/Button'
import { LinkedinShareButton } from 'components/Button'
import { EmailShareButton } from 'components/Button'

const Wrapper = styled.div`
  margin-top: 1rem;
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
        {facebookHandle && (
          <FacebookShareButton
            tooltip={{ title: 'Like on Facebook' }}
            link={{
              href: `http://facebook.com/${facebookHandle}`,
              alt: `Like ${fullName} on Facebook`,
              title: `Like ${fullName} on Facebook`,
            }}
          />
        )}
        {twitterHandle && (
          <TwitterShareButton
            tooltip={{ title: 'Follow on Twitter' }}
            link={{
              href: `https://twitter.com/${twitterHandle}`,
              title: `Follow ${fullName} on Twitter`,
              alt: `Follow ${fullName} on Twitter`,
            }}
          />
        )}
        {instagramHandle && (
          <InstagramShareButton
            tooltip={{ title: 'Follow on Instagram' }}
            link={{
              href: `https://instagram.com/${instagramHandle}`,
              title: `Follow ${fullName} on Instagram`,
              alt: `Follow ${fullName} on Instagram`,
            }}
          />
        )}
        {linkedinHandle && (
          <LinkedinShareButton
            tooltip={{ title: 'Follow on LinkedIn' }}
            link={{
              href: `https://linkedin.com/in/${linkedinHandle}`,
              title: `Follow ${fullName} on LinkedIn`,
              alt: `Follow ${fullName} on LinkedIn`,
            }}
          />
        )}
        {emailAddress ? <EmailShareButton email={emailAddress} /> : null}
      </Wrapper>
    )
  }
}

export default SocialLinksAuthor
