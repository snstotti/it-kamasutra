import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


let rerenderTree = () => {
  debugger
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


rerenderTree(store.getState())

store.subscribe(() => {
  rerenderTree(store.getState())
})

if (module.hot) {
  module.hot.accept()
}