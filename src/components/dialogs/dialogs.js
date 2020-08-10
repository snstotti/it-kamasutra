import React from 'react'
import s from './dialogs.module.css'
import DialogsItem from './dialogsItem/dialogItem'
import Message from './message/message'
import { Redirect } from 'react-router-dom'



const Dialogs = ({dialogsPage, newMessageChange, newSendMessage, isAuth}) => {
    
    const { dialogs, messages, newMessageBody } = dialogsPage

    let dialogsElements = dialogs
        .map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />)

    let messagesElements = messages
        .map(message => <Message key={message.id} message={message.message} />)

    let oNnewMessageChange = (e) =>{
        let body = e.target.value
        newMessageChange(body)
    }

    let oNnewSendMessage =()=>{
        newSendMessage()
    }

    if(!isAuth) return <Redirect to='/login' />
    
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
                        onChange={oNnewMessageChange} />
                    <button onClick={oNnewSendMessage}>Add message</button>
                </div>
            </div>
            <div className={s.dialogs__block}>

            </div>


        </div>
    )
}

export default Dialogs