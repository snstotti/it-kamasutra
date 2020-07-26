const ADD_POST = 'ADD-POST'
const ON_POST_CHANGE = 'ON-POST-CHANGE'

let initialState = {
    newPostText: '',
    myPostsData: [
        { id: 1, post: 'How are you frend', likeCount: 10 },
        { id: 2, post: 'i am fine', likeCount: 0 },
        { id: 3, post: 'My name Rukarot', likeCount: 3 },
        { id: 4, post: 'happy days', likeCount: 5 },
    ]
}

const profileReduce =(state = initialState, action)=>{

    switch(action.type) {

        case ADD_POST:
            let post = {
                id: 9, post: state.newPostText, likeCount: 0
            }
            state.myPostsData.push(post)
            state.newPostText = ''
            return state

        case ON_POST_CHANGE:
            state.newPostText = action.postMessage
            return state

        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = text => ({ type: ON_POST_CHANGE, postMessage: text })

export default profileReduce