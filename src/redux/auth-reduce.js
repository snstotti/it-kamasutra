import { authAPI } from "../components/API/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false // not authorized
}

const authReduce = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data

            }
        }

        default:
            return state
    }

}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const getAuth = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const { login, email, id } = response.data.data
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }
}
export const logined = (email, password, rememberMe) => {

    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', { _error: message }))
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}



export default authReduce