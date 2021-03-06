import React from 'react'
import s from './profile.module.css'

import ProfileInfo from './profileInfo/profileInfo'
import MyPostsContainer from './myPost/myPostsContainer'




const Profile = ({profile,  getUpdateStatus, status, owner, saveAvatar, saveProfile}) => {
    
    return (
        <div className={s.content}>
            <ProfileInfo name='Nikol' saveProfile={saveProfile} owner={owner} saveAvatar={saveAvatar} profile={profile} getUpdateStatus={getUpdateStatus} status={status} />

            <div className={s.myPosts}>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile