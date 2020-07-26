import React from 'react'
import s from './myPosts.module.css'
import Post from './post/post'



const MyPosts = ({ addPost, profilePage, updateChange }) => {

    
    const { myPostsData, newPostText} = profilePage

    let myPostsElements = myPostsData
        .map(el => {
            return <Post key={el.id} message={el.post} />
        })

    let addText = React.createRef()

    let onAddPost = () => {
        addPost()
    }

    let onUpdateChange = () => {
        let text = addText.current.value
        updateChange(text)
    }

    return (
        <div className={s.myPosts}>
            <div>
                <h2>My posts</h2>
            </div>

            <div className={s.myPosts__text}>
                <textarea
                    ref={addText}
                    value={newPostText}
                    className={s.textarea}
                    onChange={onUpdateChange} />
            </div>

            <div className={s.button}>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>


            {myPostsElements}

        </div>
    )
}

export default MyPosts