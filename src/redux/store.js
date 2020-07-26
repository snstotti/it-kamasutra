// import dialogsReduce from "./dialogs-reduce"
// import profileReduce from "./profile-reduce"

// let store = {
//     _callsubscribe() {
//         console.log('fuck off')
//     },

//     _state: {

//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: 'Nikola' },
//                 { id: 2, name: 'Dasha' },
//                 { id: 3, name: 'July' },
//                 { id: 4, name: 'Marinad' },
//             ],

//             messages: [
//                 { id: 1, message: 'How are you frend' },
//                 { id: 2, message: 'i am fine' },
//                 { id: 3, message: 'My name Rukarot' },
//                 { id: 4, message: 'happy days' },
//             ],

//             newMessageBody: ''
//         },

//         profilePage: {
//             newPostText: '',
//             myPostsData: [
//                 { id: 1, post: 'How are you frend', likeCount: 10 },
//                 { id: 2, post: 'i am fine', likeCount: 0 },
//                 { id: 3, post: 'My name Rukarot', likeCount: 3 },
//                 { id: 4, post: 'happy days', likeCount: 5 },
//             ]
//         },

//         sidebarPage: {
            
//         }
//     },
   
//     getState() { return this._state },

//     subscribe(observer) { this._callsubscribe = observer },

//     dispatch(action) {

//         this._state.dialogsPage = dialogsReduce(this._state.dialogsPage, action)
//         this._state.profilePage = profileReduce( this._state.profilePage, action)

//         this._callsubscribe(this._state)

//     }

// }
// window.store = store

// export default store