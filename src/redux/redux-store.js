import {createStore, combineReducers} from 'redux'
import dialogsReduce from './dialogs-reduce'
import profileReduce from './profile-reduce'
import sidebarReduce from './sitebar-reduce'
import usersReduce from './users-reduce'
import authReduce from './auth-reduce'


let reducer = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    sidebarPage: sidebarReduce,
    usersPage: usersReduce,
    auth: authReduce
})

let store = createStore(reducer)

window.store=store

export default store