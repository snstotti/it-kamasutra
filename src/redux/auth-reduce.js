import { authAPI, securityAPI } from "../components/API/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCSES = 'GET_CAPTCHA_URL_SUCCSES'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null// not authorized
}
console.log(initialState.captchaUrl);
const authReduce = (state = initialState, action) => {
    
    switch (action.type) {
       
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCSES: {

            return {
                ...state,
                ...action.data
            }
        }

        default:
            return state
    }

}

export const setUserData = (userId, email, login, isAuth, captchaUrl) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth, captchaUrl } })

export const setCaptchaUrlData = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCSES, data: { captchaUrl } })


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
export const logined = (email, password, rememberMe, captchaUrl) => {
        return (dispatch) => {
        authAPI.login(email, password, rememberMe, captchaUrl)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    if(response.data.resultCode === 10){
                        dispatch(getCaptchaUrl())
                    }
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

export const getCaptchaUrl = () => async (dispatch) => {

    const response = await securityAPI.captchaUrl();
   
    const captcha = response.data.url
    dispatch(setCaptchaUrlData(captcha))
    
 }


export default authReduce