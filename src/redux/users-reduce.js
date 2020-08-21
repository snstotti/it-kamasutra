import { usersAPI, followAPI } from "../components/API/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const USER_SHOW = 'USER_SHOW'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'
const TOGGLE_IS_LOADER = 'TOGGLE_IS_LOADER'
const TOGGLE_IS_DISABLE = 'TOGGLE_IS_DISABLE'


let initialState = {
    users: [ ],
    totalUserCount: 54, // всего пользователей
    pageSize: 5, // колличество пльзователей на страннице
    currentPage: 1, // текущая страница
    isLoader: true,
    isDisable: []
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
        case TOGGLE_IS_DISABLE: 
            return {
                ...state,
                isDisable: action.isLoader //если true
                ? [...state.isDisable, action.userId] // добавили id которого на которого подписываемся
                : state.isDisable.filter(id=>id !==  action.userId) //удаляем id после подписки
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
export const toggleIsDisable =(isLoader, userId) =>({ type: TOGGLE_IS_DISABLE, isLoader, userId})

export const requestUser = (current, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsloader(false))
        dispatch(setCurentPage(current))
            usersAPI.getUsers(current, pageSize)
            .then(data => {
                dispatch(showUsers(data.items))
                dispatch(toggleIsloader(true))
                // this.props.setTotalCount(response.data.totalCount)
            })
    } 
}

export const follow = (userId) => {
    return (dispatch)=> {
        dispatch(toggleIsDisable(true, userId))
        followAPI.getFollow(userId)
        .then(data =>{
            if(data.resultCode === 0){
                dispatch(followeds(userId))
            }
            dispatch(toggleIsDisable(false, userId))
        })
    }

   
}

export const unfollow = (userId) => {
    return (dispatch)=> {
        dispatch(toggleIsDisable(true, userId))
        followAPI.getUnfollow(userId)
        .then(data =>{
            if(data.resultCode === 0){
                dispatch(unFolloweds(userId))
            }
            dispatch(toggleIsDisable(false, userId))
        })
    }
}

export default usersReduce