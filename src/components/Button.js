import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, test}) => {
    return <button onClick={test} className='btn' style={{backgroundColor:color}}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    test: PropTypes.func,
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button
