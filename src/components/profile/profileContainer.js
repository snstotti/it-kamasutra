import React, { Component } from 'react'
import Profile from './profile'
import { connect } from 'react-redux'
import axios from 'axios'
import { setUserProfile } from '../../redux/profile-reduce'
import { withRouter } from 'react-router-dom'



class ProfileContainer extends Component {

    componentDidMount(){
        let userId = this.props.match.params.userId

        if(!userId) {
            userId = 2
        }

        axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            
            this.props.setUserProfile(response.data)
        })
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

let WithUriComponentConteiner = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUriComponentConteiner)