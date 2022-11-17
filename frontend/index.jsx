import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util';
import {login, logout, signup } from './actions/session_actions'
import {getAllBusinesses,createReview} from './util/businesses_api_util'

document.addEventListener("DOMContentLoaded", () => {
  
  window.signup= signup;
  window.login = login;
  window.logout = logout;
  window.getAllBusinesses = getAllBusinesses
  window.createReview = createReview
 let store = configureStore()
  const root = document.getElementById("root");
  
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

  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>Heroku</h1>, root);

});


