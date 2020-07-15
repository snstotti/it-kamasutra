import React from 'react'
import './navBar.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div>
                <ul className='list'>
                    <li className='list__item'>
                        <a className='link' href='/Profile'>Profile</a>
                    </li>
                    <li className='list__item'>
                        <a className='link' href='/Messages'>Messages</a>
                    </li>
                    <li className='list__item'>
                        <a className='link' href='/News'>News</a>
                    </li>
                    <li className='list__item'>
                        <a className='link' href='/Musick'>Musick</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar