const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const USER_SHOW = 'USER_SHOW'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'
const TOGGLE_IS_LOADER = 'TOGGLE_IS_LOADER'

let initialState = {
    users: [ ],
    totalUserCount: 54, // всего пользователей
    pageSize: 5, // колличество пльзователей на страннице
    currentPage: 7, // текущая страница
    isLoader: true
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
        case TOGGLE_IS_LOADER: 
            return {
                ...state, isLoader: action.load
            }

        default:
            return state
    }
}

export const followeds = userId => ({ type: FOLLOW, userId })
export const unFolloweds = userId => ({ type: UNFOLLOW, userId })
export const showUsers = users => ({ type: USER_SHOW, users })
export const setCurentPage = currentPage => ({ type: CURRENT_PAGE, currentPage })
export const setTotalCount = num => ({ type: TOTAL_COUNT, num })
export const toggleIsloader = load => ({ type: TOGGLE_IS_LOADER, load })




export default usersReduce