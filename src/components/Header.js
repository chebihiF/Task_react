import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, test2}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
           <Button color='green' text='Add' test={test2}/>
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
