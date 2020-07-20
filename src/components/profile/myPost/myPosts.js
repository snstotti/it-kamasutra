import React from 'react'
import s from './myPosts.module.css'
import Post from './post/post'


const MyPosts = ({myPostsData, addPost}) => {

    let myPostsElements = myPostsData
    .map(el=>{
        return <Post key={el.id} message={el.post} />
    })

    let addText = React.createRef()
    let addPostElement = () => {
        let text = addText.current.value
        addPost(text)
        addText.current.value=''
    }

    return (
        <div className={s.myPosts}>
            <div>
                <h2>My posts</h2>
            </div>
            
            <div className={s.myPosts__text}>
                <textarea ref={addText} className={s.textarea} />
            </div>

            <div className={s.button}>
                <div>
                    <button onClick={addPostElement}>Add post</button>
                </div>
            </div>

            
           {myPostsElements}
            
        </div>
    )
}

export default MyPosts