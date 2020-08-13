import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './header'
import {getAuth } from '../../redux/auth-reduce'



class HeaderContainer extends Component {

    componentDidMount() {
        
        this.props.getAuth()

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



export default connect(mapStateToProps,{getAuth})(HeaderContainer)