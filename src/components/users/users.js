import React from 'react'
import s from './users.module.css'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'


const Users = ({ usersPage, followeds, unFolloweds, totalUserCount, pageSize, currentPage, onSetCurentPage }) => {

    let pageNumber = Math.ceil(totalUserCount / pageSize)

    let arrPagination = []

    for (let i = 1; i <= pageNumber; i++) {
        arrPagination.push(i)
    }

    let avatar = 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-fa0f3975e34b8449bad064b22bc5a77f.png'

    let pagination = arrPagination.map(p => {
        return (
            <span
                key={p}
                className={currentPage === p ? s.selectedAction : s.selected}
                onClick={() => onSetCurentPage(p)} >{p}</span>
        )
    })

    let userShow = usersPage.map(user => {

        return (
            <div key={user.id} className={s.userSection}>

                <div className={s.avatarBlock}>
                    <div>
                        <NavLink to={'/profile/' + user.id} >
                            <img src={user.photos.small || avatar} className={s.avatarUser} alt='' />
                        </NavLink>
                        
                    </div>
                    <div>
                        <button onClick={user.followed
                            ? () => {
                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {withCredentials: true,
                                headers:{'API_KEY': '2ed742ce-2034-4d99-84b4-7c09b798fd53'}})
                                .then(response =>{
                                    if(response.data.resultCode === 0){
                                        followeds(user.id)
                                    }
                                })
                            }
                            : () => {
                                Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{withCredentials: true,
                                headers:{'API_KEY': '2ed742ce-2034-4d99-84b4-7c09b798fd53'}})
                                .then(response =>{
                                    if(response.data.resultCode === 0){
                                        unFolloweds(user.id)
                                    }
                                })
                            }}>{user.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </div>

                <div className={s.description}>
                    <div className={s.userInfo}>
                        <span>{user.name}</span>
                        <span>{user.status}</span>
                    </div>
                    <div className={s.userInfo}>
                        <span>user.location.cityName</span>
                        <span>user.location.country</span>
                    </div>
                </div>

            </div>
        )
    })

    return (
        <div className={s.usersBlock}>
            <div>{pagination}</div>
            {userShow}
        </div>
    )
}
export default Users