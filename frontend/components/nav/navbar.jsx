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
                   
                   <div id="filler1"> <Link to='/businesses'>All&nbsp;Businesses</Link></div>
    
                   <div id="filler2"> <Link to='/businesses'>Write&nbsp;a&nbsp;Review</Link></div>
                    <div className='filler-greeting'>
                        { this.props.currentUser.id === null? '':
                        <div className='inner-filler'>
                            <div className='filler3-div'>
                               <a href="https://www.linkedin.com/in/zlin31/" target="_blank"><div id='filler3'><IoChatbubbleEllipsesOutline  size="1.5em" /></div></a>
                                    {/* <div className='filler3-hover'>Messages</div> */}
                                    <div className='filler3-hover'>Linkedin</div>
                            </div>
                            <div className='filler4-div'>
                             <a href="https://github.com/Opengundumstyle" target="_blank"> <div id='filler4'><FiBell size="1.5em"/></div></a>
                                    {/* <div className='filler4-hover'>Notifications</div> */}
                                    <div className='filler4-hover'>Github</div>
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