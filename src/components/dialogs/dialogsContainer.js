// import React from 'react'
import { newSendMessage } from '../../redux/dialogs-reduce'
import Dialogs from './dialogs'
import {connect} from 'react-redux'
import WithAuthReirect from '../HOC/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) =>{

    return{
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {newSendMessage}),
    WithAuthReirect
)(Dialogs)