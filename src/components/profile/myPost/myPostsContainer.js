import React from 'react'
import { onPostChangeActionCreator, addPostActionCreator } from '../../../redux/profile-reduce'
import MyPosts from './myPosts'


const MyPostsContainer = ({ store }) => {
    
    const { dispatch } = store

    let state = store.getState().profilePage

    let addPost = () => {
        dispatch(addPostActionCreator())
    }

    let updateChange = (body) => {
        dispatch(onPostChangeActionCreator(body))
    }

    return <MyPosts 
        addPost={addPost} 
        updateChange={updateChange}
        state={state}
         />
        
}

export default MyPostsContainer