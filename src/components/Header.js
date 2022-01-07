import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showTask}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
           <Button  color={showTask ? 'red' : 'green'} 
                    text= {showTask ? 'Close' : 'Add'} 
                    onAdd={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header
