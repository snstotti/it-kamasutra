import React from 'react'
import s from './navBar.module.css'

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <div>
                <ul className={s.list}>
                    <li className={s.list__item}>
                        <a className={s.link} href='/Profile'>Profile</a>
                    </li>
                    <li className={s.list__item}>
                        <a className={s.link} href='/Messages'>Messages</a>
                    </li>
                    <li className={s.list__item}>
                        <a className={s.link} href='/News'>News</a>
                    </li>
                    <li className={s.list__item}>
                        <a className={s.link} href='/Musick'>Musick</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar