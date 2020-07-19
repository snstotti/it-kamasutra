import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/state'
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

if(module.hot){
  module.hot.accept()
}