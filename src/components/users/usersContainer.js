import React, { Component } from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, toggleIsDisable, getUser } from '../../redux/users-reduce'
import Users from './users'
import Preloader from '../common/preloaders/preloader'
import { compose } from 'redux'
import WithAuthReirect from '../HOC/withAuthRedirect'



class UsersApiComponent extends Component {


    componentDidMount() {
        const { currentPage, pageSize,  getUser } = this.props
        getUser(currentPage, pageSize)
    }

    onSetCurentPage = (pageNumber) => {
        const {  pageSize, getUser } = this.props
        getUser(pageNumber, pageSize)
    }


    render() {
        const { usersPage, follow,unfollow, totalUserCount, pageSize, currentPage, isLoader,  isDisable } = this.props

        let user = <Users
            usersPage={usersPage}
            follow={follow}
            unfollow={unfollow}
            totalUserCount={totalUserCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onSetCurentPage={this.onSetCurentPage}
            isDisable={isDisable} />

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
        isLoader: state.usersPage.isLoader,
        isDisable: state.usersPage.isDisable
    }
}



export default compose(
    connect( mapStateToProps, {follow,unfollow, toggleIsDisable, getUser} ),
    WithAuthReirect
)(UsersApiComponent)