import React from 'react'
import s from './dialogs.module.css'
import DialogsItem from './dialogsItem/dialogItem'
import Message from './message/message'
import {onMessageChangeCreator, sendMessageCreator} from '../../redux/dialogs-reduce'


const Dialogs = ({store}) => {

    let state = store.getState().dialogsPage
    let dispatch = store.dispatch

    const { dialogs, messages, newMessageBody } = state
    let dialogsElements = dialogs
        .map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />)

    let messagesElements = messages
        .map(message => <Message key={message.id} message={message.message} />)

    let newMessageChange = (e) =>{
        let body = e.target.value
        dispatch(onMessageChangeCreator(body))
    }

    let newSendMessage =()=>{
        dispatch(sendMessageCreator())
    }

    console.log(newMessageBody);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea 
                        placeholder='Enter your message'
                        value={newMessageBody}
                        onChange={newMessageChange} />
                    <button onClick={newSendMessage}>Add message</button>
                </div>
            </div>
            <div className={s.dialogs__block}>

            </div>


        </div>
    )
}

export default Dialogs