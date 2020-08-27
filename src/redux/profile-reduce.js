import { profileAPI } from "../components/API/api"

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const ON_POST_CHANGE = 'ON-POST-CHANGE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    
    myPostsData: [
        { id: 1, post: 'How are you frend', likeCount: 10 },
        { id: 2, post: 'i am fine', likeCount: 0 },
        { id: 3, post: 'My name Rukarot', likeCount: 3 },
        { id: 4, post: 'happy days', likeCount: 5 },
    ],
    profile: null,
    status: 'fuck'
}

const profileReduce = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let post = {
                id: 9, post: action.post, likeCount: 0
            }
            return {
                ...state,
                myPostsData: [...state.myPostsData, post],
                newPostText: ''
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                myPostsData: state.myPostsData.filter(e=>e.id !== action.postId)
            }
        }

        case ON_POST_CHANGE: {
            return {
                ...state,
                newPostText: action.postMessage
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }
}

export const addPost = post => ({ type: ADD_POST, post })
export const deletePost = postId => ({ type: DELETE_POST, postId })
export const onPostChangeActionCreator = text => ({ type: ON_POST_CHANGE, postMessage: text })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = status => ({ type: SET_USER_STATUS, status })

export const userProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
} // получение статуса с АПИ и установка в state

export const getUpdateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
    }
} // обновление статуса

export default profileReduce