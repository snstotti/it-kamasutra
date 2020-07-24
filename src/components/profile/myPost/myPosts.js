import React from 'react'
import s from './myPosts.module.css'
import Post from './post/post'
import { onPostChangeActionCreator, addPostActionCreator } from '../../../redux/state'


const MyPosts = ({ myPostsData, newPostText, dispatch }) => {

    let myPostsElements = myPostsData
        .map(el => {
            return <Post key={el.id} message={el.post} />
        })

    let addText = React.createRef()

    let addPostElement = () => {
        dispatch(addPostActionCreator())
    }

    let updateChange = () => {

        let text = addText.current.value

        dispatch(onPostChangeActionCreator(text))
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
                    onChange={updateChange} />
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