import React, { Component } from 'react'
import { connect } from 'react-redux'
import { followedAC, unFollowedAC, usersShowAC, currentPageAC, totalCountAC } from '../../redux/users-reduce'
import Users from './users'
import * as axios from 'axios'


class UsersApiComponent extends Component {

    componentDidMount() {
        const { currentPage, pageSize, showUsers } = this.props
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                showUsers(response.data.items)
                // this.props.setTotalCount(response.data.totalCount)
            })
    }


    onSetCurentPage = (pageNumber) => {
        const { setCurentPage, pageSize, showUsers } = this.props
        setCurentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                showUsers(response.data.items)
            })
    }


    render() {
        const { usersPage, followeds, unFolloweds, totalUserCount, pageSize, currentPage } = this.props
        return <Users
            usersPage={usersPage}
            followeds={followeds}
            unFolloweds={unFolloweds}
            totalUserCount={totalUserCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onSetCurentPage={this.onSetCurentPage} />

    }
}

let mapStateToProps = (state) => {

    return {
        usersPage: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followeds: (userId) => {
            dispatch(followedAC(userId))
        },
        unFolloweds: (userId) => {
            dispatch(unFollowedAC(userId))
        },
        showUsers: (users) => {
            dispatch(usersShowAC(users))
        },
        setCurentPage: (curentPage) => {
            dispatch(currentPageAC(curentPage))
        },
        setTotalCount: (num) => {
            dispatch(totalCountAC(num))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)

export default UsersContainer