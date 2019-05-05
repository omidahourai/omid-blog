import React from 'react'
import styled from 'styled-components'
import { FacebookShareButton } from 'components/Button'
import { TwitterShareButton } from 'components/Button'
import { InstagramShareButton } from 'components/Button'
import { LinkedinShareButton } from 'components/Button'
import { EmailShareButton } from 'components/Button'

const Wrapper = styled.div`
  margin-top: 1rem;
`

export default props => (
  <Wrapper>
    {props.facebookHandle && (
      <FacebookShareButton
        tooltip={{ title: 'Like on Facebook' }}
        link={{
          href: `http://facebook.com/${props.facebookHandle}`,
          alt: `Like ${props.authorName} on Facebook`,
          title: `Like ${props.authorName} on Facebook`,
        }}
      />
    )}
    {props.twitterHandle && (
      <TwitterShareButton
        tooltip={{ title: 'Follow on Twitter' }}
        link={{
          href: `https://twitter.com/${props.twitterHandle}`,
          title: `Follow ${props.authorName} on Twitter`,
          alt: `Follow ${props.authorName} on Twitter`,
        }}
      />
    )}
    {props.instagramHandle && (
      <InstagramShareButton
        tooltip={{ title: 'Follow on Instagram' }}
        link={{
          href: `https://instagram.com/${props.instagramHandle}`,
          title: `Follow ${props.authorName} on Instagram`,
          alt: `Follow ${props.authorName} on Instagram`,
        }}
      />
    )}
    {props.linkedinHandle && (
      <LinkedinShareButton
        tooltip={{ title: 'Follow on LinkedIn' }}
        link={{
          href: `https://linkedin.com/in/${props.linkedinHandle}`,
          title: `Follow ${props.authorName} on LinkedIn`,
          alt: `Follow ${props.authorName} on LinkedIn`,
        }}
      />
    )}
    {props.emailAddress && <EmailShareButton email={props.emailAddress} />}
  </Wrapper>
)
