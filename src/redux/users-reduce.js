const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const USER_SHOW = 'USER_SHOW'

let initialState = {
    users: [ ]
}

const usersReduce = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case USER_SHOW:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followedAC = userId => ({ type: FOLLOW, userId })
export const unFollowedAC = userId => ({ type: UNFOLLOW, userId })
export const usersShowAC = users => ({ type: USER_SHOW, users })



export default usersReduce