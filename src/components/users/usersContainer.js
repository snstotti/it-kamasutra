import React, { Component } from 'react'
import { connect } from 'react-redux'
import { followeds, unFolloweds, showUsers, setCurentPage, setTotalCount, toggleIsloader } from '../../redux/users-reduce'
import Users from './users'
import * as axios from 'axios'
import Preloader from '../common/preloaders/preloader'


class UsersApiComponent extends Component {

    componentDidMount() {
        const { currentPage, pageSize, showUsers, toggleIsloader } = this.props
        toggleIsloader(false)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{withCredentials: true})
            .then(response => {
                showUsers(response.data.items)
                // this.props.setTotalCount(response.data.totalCount)
                toggleIsloader(true)
            })
    }

    onSetCurentPage = (pageNumber) => {
        const { setCurentPage, pageSize, showUsers, toggleIsloader } = this.props
        toggleIsloader(false)
        setCurentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,{withCredentials: true})
            .then(response => {
                showUsers(response.data.items)
                toggleIsloader(true)
            })

    }


    render() {
        const { usersPage, followeds, unFolloweds, totalUserCount, pageSize, currentPage, isLoader } = this.props

        let user = <Users
            usersPage={usersPage}
            followeds={followeds}
            unFolloweds={unFolloweds}
            totalUserCount={totalUserCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onSetCurentPage={this.onSetCurentPage} />

        return <>
            {isLoader ? user : <Preloader />}

        </>

    }
}

let mapStateToProps = (state) => {

    return {
        usersPage: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoader: state.usersPage.isLoader
    }
}

const UsersContainer = 
connect( mapStateToProps, {followeds,unFolloweds,showUsers,setCurentPage,setTotalCount,toggleIsloader} )(UsersApiComponent)

export default UsersContainer