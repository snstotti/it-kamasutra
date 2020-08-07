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
                ...action.data,
                isAuth: true
            }
        }
        
        default:
            return state
    }
    
}

export const setUserData = (login, email, userId) => ({ type: SET_USER_DATA, data:{login, email, userId} })

export default authReduce