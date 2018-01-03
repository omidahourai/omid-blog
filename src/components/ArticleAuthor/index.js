import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'


const ArticleAuthor = ({ firstName, lastName, description, photoUrl }) => {
  const photoDim = 110
  const photoDim2x = photoDim * 2
  const fullName = `${ firstName } ${ lastName }`
  const authorLink = {
    to: `/author/${ (firstName + lastName).toLowerCase() }/`,
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
      </div>
    </div>
  )
}

  export default ArticleAuthor