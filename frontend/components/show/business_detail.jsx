import React from 'react';
// import {Link} from 'react-router';
import ReviewsIndexContainer from './ReviewsIndex_container'

import { FaExternalLinkAlt,FaRegCommentDots,FaPhoneAlt,FaMapMarkedAlt} from "react-icons/fa";

const BusinessDetail = ({business,reviews}) =>{
   
   return(
         
         <div className='business-show'>
             <div className='rating'>Rating:{business.business_rating || 'No reviews yet'}</div>
             <br />
                <div className='business-info'>
               
                    <div className='address'>Get direction:{business.address} <FaMapMarkedAlt size='1.7em'/></div>

                    <hr />
                           
                    <div className='website'>{business.website} <FaExternalLinkAlt size='1.7em'/></div>

                    <hr />
                          
                    <div className='phone'>{business.phone}< FaPhoneAlt size='1.7em'/></div>

                    <hr />

                    <div className='Business'>Message the Business <FaRegCommentDots size='1.7em'/></div>
                        
                </div>


             <div className='reviews'>
            
                <h3>Recommended Reviews</h3>
                {
                reviews.map(review => {
                    return (<ReviewsIndexContainer key={review.id} review={review} />)
                   

                }
                    )}
             </div>
             
         </div>
     

   )
 
}

export default BusinessDetail
