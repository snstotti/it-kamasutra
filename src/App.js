import React from 'react';
import './App.css';
import Profile from './components/profile/profile';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Dialogs from './components/dialogs/dialogs';
// import Content

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='contentBlock'>
         <NavBar />
         {/* <Profile /> */}
         <Dialogs />
      </div>
    </div>
  );
}

export default App;
