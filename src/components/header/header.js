import React from 'react'
import './header.css'
import icon from './basketball.ico'

const Header = ()=> {
    return (
        <div className='header'>
            <img src={icon} alt='' className='icon'/>
        </div>
    )
}

export default Header