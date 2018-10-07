import React from 'react'
import { isArray, map } from 'lodash'
import PropTypes from 'prop-types'
import svgs from '../../svgs'
import './styles.css'

const SvgIcon = props => {
  const name = props.icon
  const data = svgs[name]
  const { svg, path, circles, rects = [] } = data
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...svg}>
      <title>{name}</title>
      {isArray(path) ? (
        map(path, (props, index) => <path key={index} {...props} />)
      ) : (
        <path {...path} />
      )}
      {map(circles, (props, index) => (
        <circle key={index} {...props} />
      ))}
      {map(rects, (props, index) => (
        <rect key={index} {...props} />
      ))}
    </svg>
  )
}

SvgIcon.propTypes = {
  icon: PropTypes.string,
}

export default SvgIcon
