import React, { Component, lazy } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import { Route, withRouter } from 'react-router-dom'


// import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import {initialize} from './redux/app-reduce'
import { connect } from 'react-redux'
import Preloader from './components/common/preloaders/preloader';
import {withSuspense} from './components/HOC/withSuspense';
const DialogsContainer = lazy(() => import('./components/dialogs/dialogsContainer'))
const UsersContainer = lazy(() => import('./components/users/usersContainer'))
const ProfileContainer = lazy(() => import('./components/profile/profileContainer'))

class App extends Component{

  componentDidMount() {
    this.props.initialize()
  }

  render() {

    if(!this.props.initialized){
      return <Preloader />
    }
    
    return (
      <div className='App'>
        <HeaderContainer />
        <div className='contentBlock'>
          <NavBar />
          <Route
            path='/messages'
            render={withSuspense(DialogsContainer)} />
          <Route
            path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />
          <Route
            path='/users'
            render={withSuspense(UsersContainer)} />
          <Route
            path='/login'
            render={() => <Login />} />
        </div>
      </div>


    );
  }
}

const mapStateToProps = (state)=>{
  return{
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initialize})
)(App)
