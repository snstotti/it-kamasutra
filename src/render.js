import React from 'react';
import ReactDOM from 'react-dom';
import {addPost, onPostChange} from './redux/state'
import App from './App';


export let rerenderTree=(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} onPostChange={onPostChange} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

