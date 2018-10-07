import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const AnchorCircleIcon = ({
  style,
  className,
  href,
  alt,
  title,
  rel,
  children,
  target,
}) => (
  <a
    className={[styles.btn].concat(className).join(' ')}
    style={style}
    href={href}
    alt={alt || title}
    rel={rel}
    target={target}
    title={title}
  >
    {children}
  </a>
)

AnchorCircleIcon.propTypes = {
  style: PropTypes.object,
}

export default AnchorCircleIcon
