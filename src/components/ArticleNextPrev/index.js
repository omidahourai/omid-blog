import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const c ={
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
}

const parseImgMeta = ({hero, title}) => {
  const width = hero.width || 75
  const height = hero.height || 75
  const width2x = width * 2
  const height2x = height * 2
  return {
      title,
      alt: hero.title,
      src: `${ hero.file.url }?w=${ width }&h=${ height }&q=70`,
      srcSet: `${ hero.file.url }?w=${ width2x }&h=${ height2x }&q=70 2x`,
  }
}

const NoDataBlock = ({ direction }) => (
  <div className={direction === c.NEXT ? styles.next : styles.prev}>
  </div>
)

const NextPrev = ({ title, hero, direction, slug }) => {
  return  (
      <Link to={`/articles/${slug}`}
        className={direction === c.NEXT ? styles.next : styles.prev}
        title={title}
        alt={title}>
        <div className={styles.thumbnail}>
          <img {...parseImgMeta({hero, title})} />
        </div>
        <div className={styles.text}>
          <p>{direction === c.NEXT ? 'NEWER >' : '< OLDER'}</p>
          <h4>{title}</h4>
        </div>
      </Link>
  )
}

const ArticleNextPrev = ({ prevData, nextData }) => {
  return (
    <div className={styles.wrapper}>
      {prevData ? (
        <NextPrev
          direction={c.PREVIOUS}
          {...prevData}/>
      ) : <NoDataBlock direction={c.PREVIOUS}/>}
      {nextData ? (
        <NextPrev
          direction={c.NEXT}
          {...nextData}/>
      ) : <NoDataBlock direction={c.NEXT}/>}
    </div>
  )
}

  export default ArticleNextPrev