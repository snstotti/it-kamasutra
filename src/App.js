import React from 'react';
import './App.css';
import Profile from './components/profile/profile';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Dialogs from './components/dialogs/dialogs';
import { Route, BrowserRouter } from 'react-router-dom'
// import Content

function App({state, addPost}) {
  
  const {dialogsPage, profilePage} = state

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='contentBlock'>
          <NavBar />
          <Route path='/messages' render={()=><Dialogs dialogsPage={dialogsPage} />} />
          <Route path='/profile' render={()=><Profile profilePage={profilePage} addPost={addPost} />} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
