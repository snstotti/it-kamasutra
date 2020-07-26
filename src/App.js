import React from 'react';
import './App.css';
import Profile from './components/profile/profile';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Dialogs from './components/dialogs/dialogs';
import { Route, BrowserRouter } from 'react-router-dom'



function App({store}) {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='contentBlock'>
          <NavBar />
          <Route 
            path='/messages' 
            render={()=><Dialogs store={store} />} />
          <Route 
            path='/profile' 
            render={()=><Profile store={store} />} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
