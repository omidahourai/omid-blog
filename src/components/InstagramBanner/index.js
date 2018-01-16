import React, { Component } from 'react'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import styles from './styles.module.css'
import { FaInstagram, FaHeart } from 'common/icons'
import { Tooltip } from 'react-tippy'

const InstagramBanner = ({ feedData }) => {
  const imageData = map( feedData, item => {
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
    <ul className={styles.instagram}> 
        {map(imageData, image => (
            <li key={image.key}>
                {/*<Tooltip
                  title="Welcome to React"
                  position="top"
                  duration="250"
                  hideOnClick="true"
                  inertia="true"
                  sticky="true"
                  stickyDuration="0"
                  touchHold="true"
                  arrow="true"
                  style={{
                    marginLeft: '50%',
                    marginTop: '-100',
                  }}>*/}
                  <a href={image.link} target="_blank">
                    <FaInstagram color="#FFF" size="2rem"/>
                    <span className={styles.likes}>
                      <FaHeart color="#FFF" size="1rem"/>
                      <span>{image.likes}</span>
                    </span>
                  </a>
                {/*</Tooltip>*/}
                <div className={styles.overlay}></div>
                <img src={image.url} alt={image.text} title={image.text} />
            </li>
        ))}
    </ul>
  )
}

export default InstagramBanner