import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import dialogsReduce from './dialogs-reduce'
import profileReduce from './profile-reduce'
import sidebarReduce from './sitebar-reduce'
import usersReduce from './users-reduce'
import authReduce from './auth-reduce'
import thunkMiddleware from 'redux-thunk'
import appReduce from './app-reduce'
import { reducer as formReducer } from 'redux-form'


let reducer = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    sidebarPage: sidebarReduce,
    usersPage: usersReduce,
    auth: authReduce,
    form: formReducer,
    app: appReduce
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


// let store = createStore(reducer, applyMiddleware(thunkMiddleware))

// window._store_=store

export default store