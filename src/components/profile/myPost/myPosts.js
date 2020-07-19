import React from 'react'
import s from './myPosts.module.css'
import Post from './post/post'


const MyPosts = ({myPostsData}) => {

    let myPostsElements = myPostsData
    .map(el=>{
        return <Post key={el.id} message={el.post} />
    })

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

            
           {myPostsElements}
            
        </div>
    )
}

export default MyPosts