import React, { Component } from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, toggleIsDisable, requestUser } from '../../redux/users-reduce'
import Users from './users'

import { compose } from 'redux'
import { getUsers, getTotalUserCount, getPageSize, getCurrentPage, getIsLoader, getIsDisable } from '../../redux/users-selector'





class UsersApiComponent extends Component {


    componentDidMount() {
        const { currentPage, pageSize,  requestUser } = this.props
        requestUser(currentPage, pageSize)
    }

    onSetCurentPage = (pageNumber) => {
        const {  pageSize, requestUser } = this.props
        requestUser(pageNumber, pageSize)
    }


    render() {
        const { usersPage, follow,unfollow, totalUserCount, pageSize, currentPage, isLoader,  isDisable } = this.props

       
        
        return <>
           
            <Users
            usersPage={usersPage}
            follow={follow}
            unfollow={unfollow}
            totalUserCount={totalUserCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onSetCurentPage={this.onSetCurentPage}
            isDisable={isDisable}
            isLoader={isLoader} />
            

        </>

    }
}

let mapStateToProps = (state) => {

    return {
        usersPage: getUsers(state),
        totalUserCount: getTotalUserCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoader: getIsLoader(state),
        isDisable: getIsDisable(state)
    }
}

export default compose(
    connect( mapStateToProps, {follow,unfollow, toggleIsDisable, requestUser} ),
    
)(UsersApiComponent)