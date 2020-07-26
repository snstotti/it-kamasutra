import React from 'react';
import './App.css';
import Profile from './components/profile/profile';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import { Route } from 'react-router-dom'
import DialogsContainer from './components/dialogs/dialogsContainer';



function App() {
  debugger
  return (
      <div className='App'>
        <Header />
        <div className='contentBlock'>
          <NavBar />
          <Route 
            path='/messages' 
            render={()=><DialogsContainer />} />
          <Route 
            path='/profile' 
            render={()=><Profile />} />
        </div>
      </div>
    

  );
}

export default App;
