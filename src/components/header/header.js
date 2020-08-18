import React from 'react'
import s from './header.module.css'
import icon from './basketball.ico'
import { NavLink } from 'react-router-dom'

const Header = ({isAuth, login, logout}) => {
    const buttonLogout = <div>
        <span>{login}</span> <button onClick={logout}>LogOut</button>
    </div>
    return (
        <div  className={s.header}>
            <div>
                <img src={icon} alt='' className={s.icon} />
            </div>
            <div className={s.loginBlock}>
                {isAuth ? buttonLogout :
                <NavLink  to='/login'>Login</NavLink>}
            </div>
        </div>
    )
    
}

export default Header