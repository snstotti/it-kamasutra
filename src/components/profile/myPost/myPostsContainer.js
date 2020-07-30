// import React from 'react'
import { onPostChangeActionCreator, addPostActionCreator } from '../../../redux/profile-reduce'
import MyPosts from './myPosts'
import { connect } from 'react-redux'


let mapStateToProps =(state)=>{
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        updateChange: (body)=>{
            dispatch(onPostChangeActionCreator(body))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer