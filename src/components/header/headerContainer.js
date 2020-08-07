import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import Header from './header'
import { setUserData } from '../../redux/auth-reduce'


class HeaderContainer extends Component {

    componentDidMount() {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                const { login, email, id } = response.data.data
                if (response.data.resultCode === 0) {
                    
                    this.props.setUserData(login, email, id)
                }
                
            })

    }



    render() {
        return (
            <Header {...this.props} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{setUserData})(HeaderContainer)