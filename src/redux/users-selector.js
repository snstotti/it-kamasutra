export const getUsers = (state) =>{
    return state.usersPage.users
} 
export const getTotalUserCount = (state) =>{
    return state.usersPage.totalUserCount
} 
export const getPageSize = (state) =>{
    return state.usersPage.pageSize
} 
export const getCurrentPage = (state) =>{
    return state.usersPage.currentPage
} 
export const getIsLoader = (state) =>{
    return state.usersPage.isLoader
} 
export const getIsDisable = (state) =>{
    return state.usersPage.isDisable
} 