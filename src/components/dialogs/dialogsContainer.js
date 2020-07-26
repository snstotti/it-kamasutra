import React from 'react'
import { onMessageChangeCreator, sendMessageCreator } from '../../redux/dialogs-reduce'
import Dialogs from './dialogs'
import {connect} from 'react-redux'


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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer