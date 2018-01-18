import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'
import { lowerFirst } from 'lodash'
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
} from 'common/icons'
import { AnchorCircleIcon } from 'common/components'

export const SocialLinksShare = ({ slug, title, category, imageUrl, tags }) => (
  <div className={`social-share ${ styles.share }`}>
    <AnchorCircleIcon 
      className={`${styles.btn} ${styles.facebook}`}
      href={encodeURI(`https://facebook.com/sharer/sharer.php?u=${ decodeURIComponent( `http://www.omid.com/${lowerFirst(category)}/${ slug }`)}`)}
      rel="external"
      target="_blank"
      title="Share on Facebook">
      <FaFacebook />
    </AnchorCircleIcon>
    <AnchorCircleIcon 
      className={`${styles.btn} ${styles.twitter}`}
      href={encodeURI(`https://twitter.com/share?text=Check out this article by @omidahourai: ${ title }&hashtags=${ tags.join(',') }&url=${ `http://www.omid.com/${lowerFirst(category)}/${ slug }` }`)}
      rel="external"
      target="_blank"
      title="Share on Twitter">
      <FaTwitter />
    </AnchorCircleIcon>
    <AnchorCircleIcon 
      className={`${styles.btn} ${styles.pinterest}`}
      href={`https://pinterest.com/pin/create/button/?url=http://omid.com/${lowerFirst(category)}/${slug}/&media=${imageUrl}`}
      rel="external"
      target="_blank"
      title="Share on Pinterest">
      <FaPinterestP />
    </AnchorCircleIcon>
  </div>
)

export default SocialLinksShare