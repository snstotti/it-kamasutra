
// import React from 'react'
import {connect} from 'react-redux'
import { followedAC, unFollowedAC, usersShowAC } from '../../redux/users-reduce'
import Users from './users'


let mapStateToProps =(state)=>{
    
    return{
        usersPage: state.usersPage.users
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        followeds: (userId) =>{
            dispatch(followedAC(userId))
        },
        unFolloweds: (userId) => {
            dispatch(unFollowedAC(userId))
        },
        showUsers: (users) => {
            dispatch(usersShowAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer