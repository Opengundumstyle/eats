import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {signup,clearErrors} from '../../actions/session_actions';
import SessionForm from  './SessionForm';

const mapStateToProps = ({errors}) =>{
    return {
        errors: errors.session,
        formType: 'Sign Up',
        title:<h2>Sign Up for Eats</h2>,
        navLink: <div className="link-title">Already on Eats? <Link className='link' to="/login">Log in</Link></div>
    }
}

const mapDispatchToProps = dispatch =>{
     return {
         processForm:(user) => dispatch(signup(user)),
         clearErrors:()=>dispatch(clearErrors())
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
