import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import { Route } from 'react-router-dom'
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';



function App() {
    return (
      <div className='App'>
        <HeaderContainer />
        <div className='contentBlock'>
          <NavBar />
          <Route 
            path='/messages' 
            render={()=><DialogsContainer />} />
          <Route 
            path='/profile/:userId?' 
            render={()=><ProfileContainer />} />
          <Route 
            path='/users' 
            render={()=><UsersContainer />} />
        </div>
      </div>
    

  );
}

export default App;
