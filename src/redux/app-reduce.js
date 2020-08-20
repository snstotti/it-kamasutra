import { getAuth } from "./auth-reduce"

const SET_INITIALAZE = 'SET_INITIALAZE'


let initialState = {
    initialized: false
}

const appReduce =(state = initialState, action)=>{

    switch(action.type) {
      
        case SET_INITIALAZE:{
            
            return {
                ...state,
                initialized: true
            }
        }
        
        default:
            return state
    }
    
}

export const initializedSuccess = () => ({ type: SET_INITIALAZE})

export const initialize = () => (dispatch)=>{
    let promise = dispatch(getAuth())

    Promise.all([promise])
        .then(()=>{
        dispatch(initializedSuccess())
    })
}
 

export default appReduce