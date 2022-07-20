import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {login,clearErrors} from '../../actions/session_actions';
import SessionForm from './SessionForm';


const mapStateToProps = ({errors}) =>{
    return{
         errors: errors.session,
         formType: 'login',
         title:<h2>Log in to Eats</h2>,
         navLink: <div className="link-title">New to Eats? <Link className='link'to="/signup">Sign up</Link></div>
    }
}

const mapDispatchToProps = dispatch => { 
   return {
     processForm: (user) => dispatch(login(user)),
     demo: () => dispatch(login({username:"demouser",email:"demouser",password:"demouser"})),
     clearErrors:()=>dispatch(clearErrors())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);