import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={store.getState()} 
        dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderTree(store.getState())

store.subscribe(rerenderTree)

if (module.hot) {
  module.hot.accept()
}