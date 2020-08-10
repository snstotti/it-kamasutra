import React, { Component } from 'react'
import Profile from './profile'
import { connect } from 'react-redux'

import { userProfile } from '../../redux/profile-reduce'
import { withRouter } from 'react-router-dom'
import WithAuthReirect from '../HOC/withAuthRedirect'
import { compose } from 'redux'



class ProfileContainer extends Component {

    componentDidMount(){
        let userId = this.props.match.params.userId

        if(!userId) {
            userId = 2
        }
        this.props.userProfile(userId)
    }
    
    render(){
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps =(state)=>{
    return{
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, { userProfile }),
    withRouter,
    WithAuthReirect
)(ProfileContainer)

