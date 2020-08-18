import { authAPI } from "../components/API/api"

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    login: null,
    email: null,
    userId: null,
    isAuth: false // not authorized
}

const authReduce =(state = initialState, action)=>{

    switch(action.type) {
      
        case SET_USER_DATA:{
            
            return {
                ...state,
                ...action.data
               
            }
        }
        
        default:
            return state
    }
    
}

export const setUserData = (login, email, userId, isAuth) => ({ type: SET_USER_DATA, data:{login, email, userId, isAuth} })

export const getAuth = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const { login, email, id } = response.data.data
                    dispatch(setUserData(login, email, id, true))
                }
            })
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuth())
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