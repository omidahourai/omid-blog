import React from 'react'
import PropTypes from 'prop-types'
import { pick }from 'lodash'
import styles from './styles.module.css'


const ButtonCircle = ({ style, className, onClick, title, children }) => (
    <button
        className={[styles.btn].concat(className).join(' ')}
        style={style}
        onClick={onClick}
        title={title}>
        {children}
    </button>
)

ButtonCircle.propTypes = {
    style: PropTypes.object,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default ButtonCircle