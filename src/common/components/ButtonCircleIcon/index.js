import React from 'react'
import PropTypes from 'prop-types'
import { pick }from 'lodash'
import styles from './styles.module.css'


export const ButtonCircleIcon = ({ style, className, onClick, title, children }) => (
    <button
        className={[styles.btn].concat(className).join(' ')}
        style={style}
        onClick={onClick}
        type="button"
        title={title}>
        {children}
    </button>
)

ButtonCircleIcon.propTypes = {
    style: PropTypes.object,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default ButtonCircleIcon