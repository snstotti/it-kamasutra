const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const USER_SHOW = 'USER_SHOW'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'

let initialState = {
    users: [ ],
    totalUserCount: 54, // всего пользователей
    pageSize: 5, // колличество пльзователей на страннице
    currentPage: 7 // текущая страница
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
                ...state, users: action.users
            }

        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOTAL_COUNT:
            return {
                ...state, totalUserCount: action.num
            }

        default:
            return state
    }
}

export const followedAC = userId => ({ type: FOLLOW, userId })
export const unFollowedAC = userId => ({ type: UNFOLLOW, userId })
export const usersShowAC = users => ({ type: USER_SHOW, users })
export const currentPageAC = currentPage => ({ type: CURRENT_PAGE, currentPage })
export const totalCountAC = num => ({ type: TOTAL_COUNT, num })




export default usersReduce