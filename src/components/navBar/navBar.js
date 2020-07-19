import React from 'react'
import s from './navBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <div>
                <ul className={s.list}>
                    <li className={s.list__item}>
                        <NavLink className={s.link} activeClassName={s.activeLink} to='/profile'>Profile</NavLink>
                    </li>
                    <li className={s.list__item}>
                        <NavLink className={s.link} activeClassName={s.activeLink} to='/messages'>Messages</NavLink>
                    </li>
                    <li className={s.list__item}>
                        <NavLink className={s.link} activeClassName={s.activeLink} to='/news'>News</NavLink>
                    </li>
                    <li className={s.list__item}>
                        <NavLink className={s.link} activeClassName={s.activeLink} to='/musick'>Musick</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar