import React from 'react';
// import {Link} from 'react-router';
import ReviewsIndexContainer from './ReviewsIndex_container'
import { FaExternalLinkAlt,FaRegCommentDots,FaPhoneAlt,FaMapMarkedAlt} from "react-icons/fa";


const BusinessDetail = ({businessId,business,reviews}) =>{



   return(
     
         <div className='business-show'>
             
             <br />
                <div className='business-info'>
               
                    <div className='address'>Get direction:&nbsp;&nbsp;{business.address} <FaMapMarkedAlt size='1.3em'/></div>

                    <hr />
                           
                    <div className='website'><a href={business.website} target="_blank">{business.website}</a> &nbsp;&nbsp;&nbsp;&nbsp;<FaExternalLinkAlt size='1.3em'/></div>

                    <hr />
                          
                    <div className='phone'>{business.phone} &nbsp;&nbsp;&nbsp;&nbsp;< FaPhoneAlt size='1.3em'/></div>

                    <hr />

                    <div className='Business'>Message the Business <FaRegCommentDots size='1.3em'/></div>
                        
                </div>


             <div className='reviews'>
            
                <h3>Recommended Reviews</h3>
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
