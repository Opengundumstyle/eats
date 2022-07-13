import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../actions/session_actions';
import SessionForm from './SessionForm';


const mapStateToProps = ({errors}) =>{
    return{
         errors: errors.session,
         formType: 'login',
         navLink: <Link to="/signup">sign up instead</Link>
    }
}

const mapDispatchToProps = dispatch => { 
   return {
     processForm: (user) => dispatch(login(user)),
     demo: () => dispatch(login({username:"demouser",email:"demouser",password:"demouser"}))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);