import React from 'react';
import './App.css';
import Content from './components/content/content';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
// import Content

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-block'>
         <NavBar />
         <Content />
      </div>
    </div>
  );
}

export default App;
