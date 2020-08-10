import React from 'react'
import s from './profile.module.css'

import ProfileInfo from './profileInfo/profileInfo'
import MyPostsContainer from './myPost/myPostsContainer'
import { Redirect } from 'react-router-dom'



const Profile = ({profile, isAuth}) => {
    if(!isAuth) return <Redirect to='/login' />
    return (
        <div className={s.content}>
            <ProfileInfo name='Nikola' profile={profile}  />

            <div className={s.myPosts}>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile