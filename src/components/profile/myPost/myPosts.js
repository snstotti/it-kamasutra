import React from 'react'
import s from './myPosts.module.css'
import Post from './post/post'
import { Field, reduxForm } from 'redux-form'



const MyPosts = ({ addPost, profilePage }) => {

    
    const { myPostsData } = profilePage

    let myPostsElements = myPostsData
        .map(el => {
            return <Post key={el.id} message={el.post} />
        })
    
    let onAddPost = (value) => {
        addPost(value.post)
    }

    return (
        <div className={s.myPosts}>
            <div>
                <h2>My posts</h2>
            </div>

            <MyPostFormReducer onSubmit={onAddPost} />

            {myPostsElements}

        </div>
    )
}

const MyPostForm = ({handleSubmit}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <div className={s.myPosts__text}>
                <Field placeholder='add post' component='textarea' className={s.textarea} name='post'  />
            </div>

            <div className={s.button}>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const MyPostFormReducer = reduxForm({form: 'post'})(MyPostForm)

export default MyPosts