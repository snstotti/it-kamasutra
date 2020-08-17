const SEND_MESSAGE = 'SEND-MESSAGE'

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

    
}

const dialogsReduce =(state = initialState, action)=>{

    switch(action.type) {

        case SEND_MESSAGE:
            let body = {
                id: 7, message: action.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, body],
                
            }
          
        
        default:
            return state
    }
}

export const newSendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage })

export default dialogsReduce