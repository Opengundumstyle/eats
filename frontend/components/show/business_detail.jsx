import React from 'react';
// import {Link} from 'react-router';
import ReviewsIndex from './ReviewsIndex'

const BusinessDetail = ({business,reviews}) =>{
    console.log(reviews)
   return(
      
         <div className='business-show'>

             <img className="business-pic" src={business.photoUrl}/>
             <div className='rating'>Rating:{business.business_rating || 'No reviews yet'}</div>
             <br />
                <div className='business-info'>
                    <div className='address'>Adress:{business.address}</div>
                    <div className='website'>website:{business.website}</div>
                    <div className='phone'>Phone:{business.phone}</div>
                </div>
             <div className='reviews'>
            
                <h3>Recommended Reviews</h3>
                {
                reviews.map(review => {
                    return (<ReviewsIndex key={review.id} review={review} />)
                }
                    )}
             </div>
             
         </div>
     

   )
 
}

export default BusinessDetail
