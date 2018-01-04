import React, { Component } from 'react'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import styles from './styles.module.css'

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
                <a href={image.link} target="_blank">
                    <img src={image.url} alt={image.text} title={image.text} />
                </a>
            </li>
        ))}
    </ul>
  )
}

export default InstagramBanner