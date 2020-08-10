// import React from 'react'
import { onMessageChangeCreator, sendMessageCreator } from '../../redux/dialogs-reduce'
import Dialogs from './dialogs'
import {connect} from 'react-redux'
import WithAuthReirect from '../HOC/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps =(state)=>{

    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        newMessageChange: (body) =>{
            dispatch(onMessageChangeCreator(body))
        },
        newSendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthReirect
)(Dialogs)