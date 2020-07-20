import React from 'react'
import s from './profile.module.css'
import MyPosts from './myPost/myPosts'
import ProfileInfo from './profileInfo/profileInfo'



const Profile = ({profilePage , addPost}) => {

    const {myPostsData} = profilePage

    return (
        <div className={s.content}>
            <ProfileInfo name='Nikola' />

            <div className={s.myPosts}>
                <MyPosts myPostsData={myPostsData} addPost={addPost} />
            </div>
        </div>
    )
}

export default Profile