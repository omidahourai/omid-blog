import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '../SvgIcon'
import './styles.css'
import _ from 'lodash'

const IconButton = props => {
  const svgIcon = () => {
    if (props.content) {
      return props.content
    } else {
      return <SvgIcon {..._.pick(props, ['icon'])} />
    }
  }

  return (
    <button
      className="btn-icon"
      {..._.pick(props, ['style', 'onClick', 'title'])}
    >
      {svgIcon()}
      {props.text}
    </button>
  )
}

IconButton.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default IconButton
