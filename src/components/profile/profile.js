import React from 'react'
import s from './profile.module.css'
import MyPosts from './myPost/myPosts'
import ProfileInfo from './profileInfo/profileInfo'



const Profile = ({profilePage , dispatch}) => {

    const {myPostsData, newPostText} = profilePage

    return (
        <div className={s.content}>
            <ProfileInfo name='Nikola' />

            <div className={s.myPosts}>
                <MyPosts 
                    myPostsData={myPostsData} 
                    newPostText={newPostText} 
                    dispatch={dispatch} />
            </div>
        </div>
    )
}

export default Profile