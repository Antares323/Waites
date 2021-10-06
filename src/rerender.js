import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {addUser, updateUsersList} from './redux/state.js'
import {BrowserRouter} from 'react-router-dom'

export let rerenderState = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addUser={addUser} updateUsersList={updateUsersList}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}