import React, { Component } from 'react'
import Profile from './profile'
import { connect } from 'react-redux'

import { userProfile, getUserStatus, getUpdateStatus, saveAvatar, saveProfile } from '../../redux/profile-reduce'
import { withRouter } from 'react-router-dom'
// import WithAuthReirect from '../HOC/withAuthRedirect'
import { compose } from 'redux'



class ProfileContainer extends Component {

    refreshProfile = () =>{
        let userId = this.props.match.params.userId

        if(!userId) {
            userId = this.props.authUserId
            
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.userProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount(){
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile() 
        }

        
    }
    
    render(){
        
        return (
            <Profile {...this.props} owner={!this.props.match.params.userId} />
        )
        
    }
}

let mapStateToProps =(state)=>{
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { userProfile, getUserStatus, getUpdateStatus, saveAvatar, saveProfile }),
    withRouter,
    // WithAuthReirect
)(ProfileContainer)

