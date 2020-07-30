import {createStore, combineReducers} from 'redux'
import dialogsReduce from './dialogs-reduce'
import profileReduce from './profile-reduce'
import sidebarReduce from './sitebar-reduce'
import usersReduce from './users-reduce'


let reducer = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    sidebarPage: sidebarReduce,
    usersPage: usersReduce
})

let store = createStore(reducer)



export default store