import React from 'react';
import './App.css';
import Profile from './components/profile/profile';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import { Route, BrowserRouter } from 'react-router-dom'
import DialogsContainer from './components/dialogs/dialogsContainer';



function App({store}) {

  return (
    <BrowserRouter>
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
    </BrowserRouter>

  );
}

export default App;
