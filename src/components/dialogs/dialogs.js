import React from 'react'
import s from './dialogs.module.css'
import DialogsItem from './dialogsItem/dialogItem'
import Message from './message/message'


const Dialogs = ({dialogsPage}) => {

    const {dialogs, messages} = dialogsPage

    let dialogsElements = dialogs
        .map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />)

    let messagesElements = messages
        .map(message => <Message key={message.id} message={message.message} />)


    return (
        < className={s.dialogs}>
            <div className={s.dialogs__item}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea  />
                <button>Add message</button>
            </div>
            
        </div>
    )
}

export default Dialogs