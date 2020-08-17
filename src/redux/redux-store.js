import {createStore, combineReducers, applyMiddleware} from 'redux'
import dialogsReduce from './dialogs-reduce'
import profileReduce from './profile-reduce'
import sidebarReduce from './sitebar-reduce'
import usersReduce from './users-reduce'
import authReduce from './auth-reduce'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducer = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    sidebarPage: sidebarReduce,
    usersPage: usersReduce,
    auth: authReduce,
    form: formReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

window.store=store

export default store