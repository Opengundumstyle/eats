import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/LoginFormContainer';
import SignupFormContainer from './session_form/SignupFormContainer';
import {Route,Link,Switch} from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_util'

const App = () => (
  <div>
     <header>
        <Link to="/" className="header-link"  >
       <h1>Eats</h1>
        </Link>
         <GreetingContainer/>
    </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        </Switch>
  </div>
);

export default App;

