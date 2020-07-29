const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [
        { id: 1, name: 'Nikola' },
        { id: 2, name: 'Dasha' },
        { id: 3, name: 'July' },
        { id: 4, name: 'Marinad' },
    ],

    messages: [
        { id: 1, message: 'How are you frend' },
        { id: 2, message: 'i am fine' },
        { id: 3, message: 'My name Rukarot' },
        { id: 4, message: 'happy days' },
    ],

    newMessageBody: ''
}

const dialogsReduce =(state = initialState, action)=>{

    switch(action.type) {

        case SEND_MESSAGE:{
            let body = {
                id: 7, message: state.newMessageBody
            }
            return {
                ...state,
                messages: [...state.messages, body],
                newMessageBody: ''
            }
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }            
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const onMessageChangeCreator = body => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReduce