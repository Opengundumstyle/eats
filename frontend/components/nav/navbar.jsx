import React from 'react'
import Greeting from '../greeting/greeting_container'
import {IoChatbubbleEllipsesOutline} from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiBell } from "react-icons/fi";



class Navbar extends React.Component{

render(){
   return (
          <div className="nav">
            <div> <Link to='/' className='log-box'><img className='nav-logo' src={window.logoURL} alt="logo"/></Link></div>
                <div className="search-container">
                      <form  className='search'action="/action_page.php">
                      <input type="text" placeholder="Search.." name="search"/>
                      {/* <button type="submit" className='searchLogo'><FaSearch size='1.7em'/></button> */}
                      </form>
                </div>
                
                <div className='filler-links'>
                   
                   <div id="filler1"> <a href="#about">For Businesses</a></div>
    
                   <div id="filler2"> <a href="#contact">Write a Review</a></div>

                   <div id='filler3'><IoChatbubbleEllipsesOutline size="1.5em"/></div>

                   <div id='filler4'><FiBell size="1.5em"/></div>

                   <div className='nav-greeting'><Greeting/>  </div>
               
                </div>
                
                  
            </div>
         
        
          )
   }
}

export default Navbar