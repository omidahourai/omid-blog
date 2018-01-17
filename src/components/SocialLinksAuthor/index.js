import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelopeO,
} from 'common/icons';

export const SocialLinksAuthor = ({ facebookHandle, twitterHandle, instagramHandle, linkedinHandle, emailAddress, fullName }) => (
  <div className={`social-links ${ styles.social }`}>
    {facebookHandle ? (
      <a 
        className={styles.btn}
        href={`http://facebook.com/${ facebookHandle }`}
        target="_blank"
        rel="external"
        title={`Like ${fullName} on Facebook`}
        alt={`Like ${fullName} on Facebook`}>
        <FaFacebook />
      </a>
    ) : ''}
    {twitterHandle ? (
      <a 
        className={styles.btn}
        href={`https://twitter.com/${twitterHandle}`}
        target="_blank"
        rel="external"
        title={`Follow ${fullName} on Twitter`}
        alt={`Follow ${fullName} on Twitter`}>
        <FaTwitter />
      </a>
    ) : ''}
    {instagramHandle ? (
      <a 
        className={styles.btn}
        href={`https://instagram.com/${instagramHandle}`}
        target="_blank"
        rel="external"
        title={`Follow ${fullName} on Instagram`}
        alt={`Follow ${fullName} on Instagram`}>
        <FaInstagram />
      </a>
    ) : ''}
    {linkedinHandle ? (
      <a 
        className={styles.btn}
        href={`https://linkedin.com/in/${linkedinHandle}`}
        target="_blank"
        rel="external"
        title={`Follow ${fullName} on LinkedIn`}
        alt={`Follow ${fullName} on LinkedIn`}>
        <FaLinkedin />
      </a>
    ) : ''}
    {emailAddress ? (
      <a 
        className={styles.btn}
        href={`mailto:${emailAddress}`}
        rel="external"
        title={`Email ${fullName}`}
        alt={`Email ${fullName}`}>
        <FaEnvelopeO />
      </a>
    ) : ''}
  </div>
)

export default SocialLinksAuthor