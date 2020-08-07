import React from 'react'
import s from './header.module.css'
import icon from './basketball.ico'
import { NavLink } from 'react-router-dom'

const Header = ({isAuth, login}) => {
    
    return (
        <div  className={s.header}>
            <div>
                <img src={icon} alt='' className={s.icon} />
            </div>
            <div className={s.loginBlock}>
                {isAuth ? login :
                <NavLink  to='/login'>Login</NavLink>}
            </div>
        </div>
    )
    
}

export default Header