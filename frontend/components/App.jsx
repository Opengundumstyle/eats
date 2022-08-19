import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/LoginFormContainer';
import SignupFormContainer from './session_form/SignupFormContainer';
import business_show_container from './show/business_show_container'
import {Route,Link,Switch} from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_util'
import createReview from './show/create_review_form_container'
import business_index_container from "./index/business_index_container";
import EditReview from "./show/edit_review_from_container";

const App = () => (
 
     <div>
      {/* <Link to="/" className="header-link"  >
       <h3>Eats</h3>
       </Link> */}
         {/* <GreetingContainer/> */}
       <Switch>
        <Route exact path="/" component={business_index_container}/>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        <Route path="/businesses/:businessId/review" component={createReview} />
        <Route path="/businesses/:businessId" component={business_show_container}/>
        <Route path='/reviews/edit/:reviewId/business/:businessId' component={EditReview}/>
      </Switch>
      </div>
);

export default App;

