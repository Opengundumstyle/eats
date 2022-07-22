import React from 'react';
import {Link} from 'react-router-dom';
import { BsPersonCircle} from "react-icons/bs";


const Greeting = ({currentUser, logout}) =>{


   const sessionLinks = () => (
        <nav className='login-signup'>
          
            <Link to='/login' className='log-in-link-text'><button className='login-nav'><div className='logintext'>Log In</div></button></Link>
   
            <Link to="/signup"><div className='signup-nav'>Sign Up</div></Link>
        </nav>
   )
   
  
   const personalGreeting = () => (
    <div className="dropdown">
      <button className="dropbtn" >
            <BsPersonCircle size='2em'/>
            <div className="greeting-text"> Hi,{currentUser.username}</div> 
      </button>
      
          <div id="myDropdown" className='dropdown-content'>
            {/* <div> user profile</div>
            <div>tester </div> */}
            <div>
                <Link to="/">
                <div className="header-button" onClick={logout}>Log Out</div>
                </Link>
            </div>
       </div>
    </div>
  );
  

  return currentUser ? personalGreeting() : sessionLinks();
  
}

export default Greeting