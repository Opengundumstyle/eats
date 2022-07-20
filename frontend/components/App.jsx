import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/LoginFormContainer';
import SignupFormContainer from './session_form/SignupFormContainer';
import business_show_container from './show/business_show_container'
import {Route,Link,Switch} from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_util'
import business_index_container from "./index/business_index_container";


const App = () => (
  <div>
     {/* <header>
     <Link to="/" className="header-link"> <img className='logo' src={window.logoURL} alt="logo"/> </Link>
    </header> */}
     <div>
      {/* <Link to="/" className="header-link"  >
       <h3>Eats</h3>
       </Link> */}
         <GreetingContainer/>
       <Switch>
        <Route exact path="/" component={business_index_container}/>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        <Route path="/businesses/:businessId" component={business_show_container}/>
      </Switch>
      </div>
  </div>
);

export default App;

