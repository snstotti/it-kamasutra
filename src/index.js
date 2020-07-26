import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyContext from './contekst';


let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <MyContext.Provider value={store}>
        <App />
      </MyContext.Provider>
      
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