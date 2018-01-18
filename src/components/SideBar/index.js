import React, { Component } from 'react'
import { slice, map, result } from 'lodash'
import Link from 'gatsby-link'
import styles from './styles.module.css'
import { lowerFirst } from 'lodash';
import { SocialLinksAuthor } from 'components';
import { FaInstagram, FaHeart } from 'common/icons';

const parseImgMeta = ({photoUrl, title}) => {
  const width = 250
  const height = 250
  const r = width * 0.5
  const r2x = r * 2
  const width2x = width * 2
  const height2x = height * 2
  return {
      title,
      width,
      height,
      alt: title,
      src: `${ photoUrl }?w=${ width }&h=${ height }&r=${r}&q=70`,
      srcSet: `${ photoUrl }?w=${ width2x }&h=${ height2x }&r=${r2x}&q=70 2x`,
  }
}

export const SideBar = ({
  fullName,
  shortTitle,
  shortDescription,
  facebookHandle,
  twitterHandle,
  instagramHandle,
  linkedinHandle,
  emailAddress,
  instagramData,
  categories,
  altPhoto: {file: {photoUrl}},
}) => {
  const authorLink = {
    // TODO: CREATE AUTHOR PAGE
    // to: `/author/${ (firstName + lastName).toLowerCase() }/`,
    to: '#',
    title: `Articles by ${ fullName }`,
    rel: `author`,
  }

  const igImageData = map( instagramData, item => {
    let text = result(item, 'caption.text') || ''
    if (text.length > 50) {
      text = text.slice(0,50)+'...'
    }
    return {
      text,
      key: item.id,
      url: item.images.standard_resolution.url,
      width: item.images.standard_resolution.width,
      height: item.images.standard_resolution.height,
      likes: item.likes.count,
      link: item.link,
    }
  })

  return (
    <aside className={styles.aside}>
      <section className={`profile ${styles.profile}`}>
        <img
          className={styles.avatar}
          {...parseImgMeta({photoUrl, title: shortTitle})}/>
        <h6>{shortTitle}</h6>
        <p>{shortDescription}</p>
      </section>
      <section className={`follow-me ${styles.followme}`}>
        <h3>Follow Me</h3>
        <SocialLinksAuthor
          facebookHandle={`Omid-Ahourai-296038887569459`}
          twitterHandle={`omidahourai`}
          instagramHandle={`omidahourai`}
          linkedinHandle={`omidahourai`}
          emailAddress={`hello@omid.com`}
          fullName={fullName}
        />
      </section>
      <section className={`instagram ${styles.instagram}`}>
        <h3>Instagram</h3>
        <ul>
          {map(slice(igImageData, 0, 9), image => (
            <li key={image.key}>
              <a href={image.link} target="_blank">
                <FaInstagram color="#FFF" size="2rem"/>
                <span className={styles.likes}>
                  <FaHeart color="#FFF" size="1rem"/>
                  <span>{image.likes}</span>
                </span>
              </a>
              <div className={styles.overlay}></div>
              <img src={image.url} alt={image.text} title={image.text} />
            </li>
          ))}
        </ul>
      </section>
      <section className={`categories ${styles.categories}`}>
        <h3>Categories</h3>
        <ul>
        {map(categories, ({categoryName, count}) => (
          <li>
            <a href={`/${lowerFirst(categoryName)}/`}>
              <span className={styles.name}>{categoryName}</span>
              <span className={styles.count}>({count})</span>
            </a>
          </li>
        ))}
        </ul>
      </section>
    </aside>
  )
}

export default SideBar