import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/LoginFormContainer';
import SignupFormContainer from './session_form/SignupFormContainer';
import {Route,Link} from 'react-router-dom';

const App = () => (
  <div>
     <header>
        <Link to="/" className="header-link"  >
       <h1>Eats</h1>
        </Link>
         <GreetingContainer/>
    </header>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignupFormContainer}/>
  </div>
);

export default App;