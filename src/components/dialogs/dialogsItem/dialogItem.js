import React from 'react'
import s from './dialogsItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogsItem = ({ name, id }) => {
    return (
        <div >
            <NavLink className={s.dialog} to={`/messages/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogsItem