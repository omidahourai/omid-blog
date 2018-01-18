import React from 'react'
import PropTypes from 'prop-types'
import { pick }from 'lodash'
import styles from './styles.module.css'


export const ButtonCircleIcon = ({
    style,
    className,
    title,
    children,
    onClick = () => {},
}) => (
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
    className: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
}

export default ButtonCircleIcon