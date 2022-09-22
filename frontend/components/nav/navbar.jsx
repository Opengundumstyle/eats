import React from 'react'
import Greeting from '../greeting/greeting_container'
import Search from '../search_bar/search_bar'
import {IoChatbubbleEllipsesOutline} from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiBell } from "react-icons/fi";


class Navbar extends React.Component{

render(){
   return (
          <div className="nav">
            <div> <Link to='/' className='log-box'><img className='nav-logo' src={window.logoURL} alt="logo"/></Link></div>
                    <Search/>
                <div className='filler-links'>
                   
                   <div id="filler1"> <a href="#">For&nbsp;Businesses</a></div>
    
                   <div id="filler2"> <a href="#">Write&nbsp;a&nbsp;Review</a></div>
                    <div className='filler-greeting'>
                        { this.props.currentUser.id === null? '':
                        <div className='inner-filler'>
                            <div className='filler3-div'>
                                <div id='filler3'><IoChatbubbleEllipsesOutline size="1.5em" color='rgba(45,46,47,1)'/></div>
                                    <div className='filler3-hover'>Messages</div>
                            </div>
                            <div className='filler4-div'>
                                <div id='filler4'><FiBell size="1.5em" color='rgba(45,46,47,1)'/></div>
                                    <div className='filler4-hover'>Notifications</div>
                            </div>
                        </div>
                        }  
                      <div className='nav-greeting'><Greeting/> </div>

                    </div>   
               
                </div>
            </div>
          )
   }
}

export default Navbar