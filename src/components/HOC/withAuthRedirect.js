import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToProps =(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

const WithAuthReirect =(Componetnt)=>{
    
    class RedirectComponent extends Component{

        render(){
            if(!this.props.isAuth) return <Redirect to='/login' />
            return(
                <Componetnt {...this.props} />
            )
        }
    }

    let ConnectedAuthReducerComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthReducerComponent
}


export default WithAuthReirect
