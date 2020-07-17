import React from 'react'
import s from './myPosts.module.css'
import Post from './post/post'


const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div>
                <h2>My posts</h2>
            </div>
            
            <div className={s.myPosts__text}>
                <textarea className={s.textarea} />
            </div>

            <div className={s.button}>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <Post message={`It's my first post`} />
            <Post message={`Hello, hou are you`} />
        </div>
    )
}

export default MyPosts