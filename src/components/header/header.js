import React from 'react'
import s from './header.module.css'
import icon from './basketball.ico'

const Header = ()=> {
    return (
        <div className={s.header}>
            <img src={icon} alt='' className={s.icon}/>
        </div>
    )
}

export default Header