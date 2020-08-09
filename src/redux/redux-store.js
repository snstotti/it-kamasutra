import {createStore, combineReducers, applyMiddleware} from 'redux'
import dialogsReduce from './dialogs-reduce'
import profileReduce from './profile-reduce'
import sidebarReduce from './sitebar-reduce'
import usersReduce from './users-reduce'
import authReduce from './auth-reduce'
import thunkMiddleware from 'redux-thunk'


let reducer = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    sidebarPage: sidebarReduce,
    usersPage: usersReduce,
    auth: authReduce
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

window.store=store

export default store