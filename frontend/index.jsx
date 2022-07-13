import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util';
import {login, logout, signup } from './actions/session_actions'
document.addEventListener("DOMContentLoaded", () => {

  window.signup= signup;
  window.login = login;
  window.logout = logout;
  
 let store = configureStore()
  console.log(store.getState())
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
   window.store = store

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>Heroku</h1>, root);

});

