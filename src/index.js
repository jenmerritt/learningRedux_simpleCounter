import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import counter from './reducers'

// create a store, which takes a reducer as an argument - see import list.
// createStore method comes from redux.
const store = createStore(counter);






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
