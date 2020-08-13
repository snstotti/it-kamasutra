import React from 'react'
import s from './profile.module.css'

import ProfileInfo from './profileInfo/profileInfo'
import MyPostsContainer from './myPost/myPostsContainer'




const Profile = ({profile, isAuth, getUpdateStatus, status}) => {
    console.log(status);
    return (
        <div className={s.content}>
            <ProfileInfo name='Nikola' profile={profile} getUpdateStatus={getUpdateStatus} status={status} />

            <div className={s.myPosts}>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile