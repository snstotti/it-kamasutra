import React from 'react'
import s from './dialogs.module.css'
import DialogsItem from './dialogsItem/dialogItem'
import Message from './message/message'
import { Field, reduxForm } from 'redux-form'




const Dialogs = ({dialogsPage, newSendMessage }) => {
    
    const { dialogs, messages } = dialogsPage

    let dialogsElements = dialogs
        .map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />)

    let messagesElements = messages
        .map(message => <Message key={message.id} message={message.message} />)

   

    let addNewMessage =(value)=>{
        console.log(value);
        newSendMessage(value.newMessage)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <NewMessageBody onSubmit={addNewMessage} />
                </div>
            </div>
            <div className={s.dialogs__block}>
            </div>
        </div>
    )
}

const NewMessage = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field placeholder='Enter your message' component ='textarea' name = 'newMessage' />
            <button>Add message</button>
        </form>
    )
}

const NewMessageBody = reduxForm({form: 'new message'})(NewMessage)

export default Dialogs