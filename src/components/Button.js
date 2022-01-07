import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onAdd}) => {
    return <button onClick={onAdd} className='btn' style={{backgroundColor:color}}>{text}</button>
}

Button.propTypes = {
    color: PropTypes.string,
    test: PropTypes.func,
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button
