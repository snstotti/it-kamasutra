import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import { Route, withRouter } from 'react-router-dom'
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import {initializedSuccess} from './redux/app-reduce'
import { connect } from 'react-redux'
import Preloader from './components/common/preloaders/preloader';

class App extends Component{

  componentDidMount() {
    this.props.initializedSuccess()
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
            render={() => <DialogsContainer />} />
          <Route
            path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route
            path='/users'
            render={() => <UsersContainer />} />
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
  connect(mapStateToProps, {initializedSuccess})
  
)(App)
