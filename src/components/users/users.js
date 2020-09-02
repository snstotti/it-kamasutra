import React from 'react'
import s from './users.module.css'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/paginator/paginator'
import Preloader from '../common/preloaders/preloader'


// 

const Users = ({ usersPage,  totalUserCount, pageSize, currentPage, onSetCurentPage, isDisable, isLoader, follow, unfollow }) => {

   let pagination = <Paginator  pageSize={pageSize} totalUserCount={totalUserCount} currentPage={currentPage} onSetCurentPage={onSetCurentPage} />
    
    let avatar = 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-fa0f3975e34b8449bad064b22bc5a77f.png'

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
                        <button 
                        disabled={isDisable.some(u=>u === user.id)} // если в массиве isDisable есть совпадение, true
                        onClick={user.followed 
                            ? () => {unfollow(user.id)} 
                            : () => {follow(user.id)}}>{user.followed ? 'Unfollow' : 'Follow'}</button>
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
            <div className={s.usersBlockContent}>{!isLoader ? <Preloader size={30} /> : null} {pagination}</div>
            
            {userShow}
        </div>
    )
}
export default Users