import React from 'react'
import { onMessageChangeCreator, sendMessageCreator } from '../../redux/dialogs-reduce'
import Dialogs from './dialogs'
import MyContext from '../../contekst'


const DialogsContainer = () => {

    return <MyContext.Consumer>
        {
            (store) => {

                let state = store.getState().dialogsPage
                let dispatch = store.dispatch

                let newMessageChange = (body) => {
                    dispatch(onMessageChangeCreator(body))
                }

                let newSendMessage = () => {
                    dispatch(sendMessageCreator())
                }

                return (
                    <Dialogs
                        state={state}
                        newMessageChange={newMessageChange}
                        newSendMessage={newSendMessage} />
                )
            }
        }
    </MyContext.Consumer>





}

export default DialogsContainer