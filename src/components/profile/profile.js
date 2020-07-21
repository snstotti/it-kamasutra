import React from 'react'
import s from './profile.module.css'
import MyPosts from './myPost/myPosts'
import ProfileInfo from './profileInfo/profileInfo'



const Profile = ({profilePage , addPost, onPostChange}) => {

    const {myPostsData, newPostText} = profilePage

    return (
        <div className={s.content}>
            <ProfileInfo name='Nikola' />

            <div className={s.myPosts}>
                <MyPosts 
                    myPostsData={myPostsData} 
                    newPostText={newPostText} 
                    addPost={addPost}
                    onPostChange={onPostChange} />
            </div>
        </div>
    )
}

export default Profile