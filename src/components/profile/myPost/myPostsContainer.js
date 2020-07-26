import React from 'react'
import { onPostChangeActionCreator, addPostActionCreator } from '../../../redux/profile-reduce'
import MyPosts from './myPosts'
import MyContext from '../../../contekst'


const MyPostsContainer = () => {

    return <MyContext.Consumer>
        {(store) => {
            const { dispatch } = store

            let state = store.getState().profilePage

            let addPost = () => {
                dispatch(addPostActionCreator())
            }

            let updateChange = (body) => {
                dispatch(onPostChangeActionCreator(body))
            }

            return (
                <MyPosts
                    addPost={addPost}
                    updateChange={updateChange}
                    state={state}
                />
            )
        }
        }
    </MyContext.Consumer>

}

export default MyPostsContainer