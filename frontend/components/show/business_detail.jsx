import React from 'react';
// import {Link} from 'react-router';
import ReviewsIndexContainer from './ReviewsIndex_container'
import { FaExternalLinkAlt,FaRegCommentDots,FaMapMarkedAlt} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


const BusinessDetail = ({businessId,business,reviews}) =>{

  let address = business.address;
  let encodedAddress = encodeURIComponent(address);
  console.log('show me the address',encodedAddress)
  
   return(
         <div className='business-show'>
             
             <br />
                <div className='business-info'>
                           
                    <div className='website'><a className='show-info-link' href={business.website} target="_blank">{business.website}</a> &nbsp;&nbsp;&nbsp;&nbsp;<a className='show-info-icon' href={business.website} target="_blank"><FaExternalLinkAlt className='info-icon' size='1.5em' /></a></div>

                    <hr />
                          
                    <div className='phone'><div className='number'>{business.phone}</div>&nbsp;&nbsp;&nbsp;&nbsp;< FiPhoneCall size='1.5em' className='phone-icon' /></div>

                    <hr/>

                    <div className='address'>
                        <div><a href={`https://maps.google.com/?q=${encodedAddress}`} target="_blank" rel="noopener noreferrer"><div id='direction-info'>Get&nbsp; Directions:</div></a></div>
                     
                        <div className='link-address-icon'>
                           <div className='show-address-link'>{business.address} </div>
                           <div><a href={`https://maps.google.com/?q=${encodedAddress}`} target="_blank"><FaMapMarkedAlt size='1.7em' className='show-info-icon' /></a></div>
                        </div>
                    </div>
                     <hr/>
                    <div className='Business'>Message the Business <FaRegCommentDots size='1.5em' className='message-business-icon' /></div>
                        
                </div>

            <div className='location-hour'>

                <hr/>

                <h2 className='location-hour-title'>Location {'&'} Hours</h2>
                  <div className='location-businesshour-div'>
                  <div>
                     <div><iframe
                           width="315"
                           height="150"
                           frameBorder="0" style={{border:0}}
                           referrerPolicy="no-referrer-when-downgrade"
                           src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDyts6Ey3YEEU8-OdzPG5ADqP95tMzgz14&q=${encodedAddress}`}
                           allowFullScreen>
                           </iframe>
                     </div>

                     <div className='map-direction-description'>
                        <div className='address-description'><a href={`https://maps.google.com/?q=${encodedAddress}`} target="_blank">{address}</a></div>
                        <div><button className='mini-direction-button'><a href={`https://maps.google.com/?q=${encodedAddress}`} target="_blank" rel="noopener noreferrer">Get&nbsp;directions</a></button></div>
                     </div>
                  </div>

                     <div className="business-show-more-hours">
                           <div className="business-show-hours-item">
                           <p className="business-show-hours-item-day">Mon</p>
                           <p className='open-close-business'>{business.openhour} - {business.closehour}</p>
                           </div>
                           <div className="business-show-hours-item">
                           <p className="business-show-hours-item-day">Tue</p>
                           <p className='open-close-business'>{business.openhour} - {business.closehour}</p>
                           </div>
                           <div className="business-show-hours-item">
                           <p className="business-show-hours-item-day">Wed</p>
                           <p className='open-close-business'>{business.openhour} - {business.closehour}</p>
                           </div>
                           <div className="business-show-hours-item">
                           <p className="business-show-hours-item-day">Thu</p>
                           <p className='open-close-business'>{business.openhour} - {business.closehour}</p>
                           </div>
                           <div className="business-show-hours-item">
                           <p className="business-show-hours-item-day">Fri</p>
                           <p className='open-close-business'>{business.openhour} - {business.closehour}</p>
                           </div>
                           <div className="business-show-hours-item">
                           <p className="business-show-hours-item-day">Sat</p>
                           <p className='open-close-business'>{business.openhour} - {business.closehour}</p>
                           </div>
                           <div className="business-show-hours-item">
                           <p className="business-show-hours-item-day">Sun</p>
                           <p className='open-close-business'>{business.openhour} - {business.closehour}</p>
                           </div>
                  </div>

             </div>

                <hr/>
               
            </div>

             <div className='reviews'>
            
                <h2>Recommended Reviews</h2>
                {
                  reviews.map(review => {
                     return (<ReviewsIndexContainer businessId={businessId} key={review.id} review={review} />)
                  }
                    )}
             </div>
             
         </div>
     

   )
 
}

export default BusinessDetail
