import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import { BsPersonCircle} from "react-icons/bs";
import { useDetectOutsideClick } from './greeting_util';

const Greeting = ({currentUser, logout}) =>{
   
   const dropdownRef = useRef(null)
   const [inActive,setIsActive] = useDetectOutsideClick(dropdownRef,false)
   const onClick = () => setIsActive(!inActive)

   const sessionLinks = () => (
        <nav className='login-signup'>

            <Link to='/login' className='log-in-link-text'><button className='login-nav'><div className='logintext'>Log&nbsp;In</div></button></Link>

            <Link to="/signup"><button className='signup-nav'><div className='signuptext'>Sign&nbsp;Up</div></button></Link>

        </nav>
   )
   
   const personalGreeting = () => (
    <div className="dropdown">
      <button className="dropbtn" onClick={onClick}>
            <BsPersonCircle size='3em' color='gray'/>
            <div className="greeting-text">{currentUser.username}</div> 
      </button>
          <div ref={dropdownRef} className={`menu ${inActive ? 'active' : 'inactive'}`}>
                <Link to="/">
                <div className="header-button" onClick={logout}>Log&nbsp;Out&nbsp;</div>
                </Link>
       </div>
    </div>
  );
  
  return currentUser ? personalGreeting() : sessionLinks();
  
}

export default Greeting