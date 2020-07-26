import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
        store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderTree(store.getState())

store.subscribe(()=>{
  rerenderTree(store.getState())
})

if (module.hot) {
  module.hot.accept()
}