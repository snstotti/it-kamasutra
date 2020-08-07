const ADD_POST = 'ADD-POST'
const ON_POST_CHANGE = 'ON-POST-CHANGE'
const SET_USER_PROFILE='SET_USER_PROFILE'

let initialState = {
    newPostText: '',
    myPostsData: [
        { id: 1, post: 'How are you frend', likeCount: 10 },
        { id: 2, post: 'i am fine', likeCount: 0 },
        { id: 3, post: 'My name Rukarot', likeCount: 3 },
        { id: 4, post: 'happy days', likeCount: 5 },
    ],
    profile: null
}

const profileReduce =(state = initialState, action)=>{

    switch(action.type) {

        case ADD_POST:{
            let post = {
                id: 9, post: state.newPostText, likeCount: 0
            }
            return {
                ...state,
                myPostsData: [...state.myPostsData, post],
                newPostText: ''
            }
        }
        case ON_POST_CHANGE:{
            return {
                ...state,
                newPostText: action.postMessage
            }
        }
        case SET_USER_PROFILE:{
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = text => ({ type: ON_POST_CHANGE, postMessage: text })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })

export default profileReduce