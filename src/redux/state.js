const ADD_POST = 'ADD-POST'

const ON_POST_CHANGE = 'ON-POST-CHANGE'


let store = {
    _callsubscribe(){
        console.log('fuck off')
    },

    _state: {

        dialogsPage: {
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
            ]
        },
    
        profilePage: {
            newPostText: '',
            myPostsData: [
                { id: 1, post: 'How are you frend', likeCount: 10 },
                { id: 2, post: 'i am fine', likeCount: 0 },
                { id: 3, post: 'My name Rukarot', likeCount: 3 },
                { id: 4, post: 'happy days', likeCount: 5 },
            ]
        }
    },

    getState(){ return this._state},

    subscribe(observer) { this._callsubscribe = observer },

   

    dispatch(action){

        if(action.type === ADD_POST){
            let post = {
                id: 9, post: this._state.profilePage.newPostText, likeCount: 0
            }
            this._state.profilePage.myPostsData.push(post)
            this._state.profilePage.newPostText=''
            this._callsubscribe(this._state)
            
        }else if(action.type === ON_POST_CHANGE) {
            this._state.profilePage.newPostText = action.postMessage
            this._callsubscribe(this._state)
        }
    }


}


export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = text => ({type: ON_POST_CHANGE, postMessage: text })

    

    

export default store