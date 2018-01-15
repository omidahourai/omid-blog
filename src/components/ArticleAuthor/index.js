import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'common/icons';


const ArticleAuthor = ({ firstName, lastName, description, photoUrl }) => {
  const photoDim = 110
  const photoDim2x = photoDim * 2
  const fullName = `${ firstName } ${ lastName }`
  const authorLink = {
    // TODO: CREATE AUTHOR PAGE
    // to: `/author/${ (firstName + lastName).toLowerCase() }/`,
    to: '#',
    title: `Articles by ${ fullName }`,
    rel: `author`,
  }
  return (
    <div className={styles.author}>
      <div className={styles['avatar-wrapper']} style={{ width: photoDim, height: photoDim }}>
        <img
          alt={fullName}
          src={`${ photoUrl }?w=${ photoDim }&h=${ photoDim }&q=70`}
          srcSet={`${ photoUrl }?w=${ photoDim2x }&h=${ photoDim2x }&q=70 2x`}
          className={styles.avatar}
          height={photoDim}
          width={photoDim}/>
      </div>
      <div className={styles.description}>
        <h4>
          <Link { ...authorLink }>
              {fullName}
          </Link>
        </h4>
        <p>
          {description}
        </p>
        <div className={styles.share}>
          <a 
            href="http://facebook.com/Omid-Ahourai-296038887569459/"
            target="_blank"
            title="Like Omid Ahourai on Facebook"
            alt="Like Omid Ahourai on Facebook">
            <FaFacebook />
          </a>
          <a 
            href="https://twitter.com/omidahourai"
            target="_blank"
            title="Follow Omid Ahourai on Twitter"
            alt="Follow Omid Ahourai on Twitter">
            <FaTwitter />
          </a>
          <a 
            href="https://instagram.com/omidahourai"
            target="_blank"
            title="Follow Omid Ahourai on Instagram"
            alt="Follow Omid Ahourai on Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

  export default ArticleAuthor