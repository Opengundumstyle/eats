import React from 'react';
// import {Link} from 'react-router';
import ReviewsIndex from './ReviewsIndex'

// const reviewList = (reviews) =>{
  
//     reviews.map(review=>( 
//         <ReviewsIndex
//          review={review}
//          key={review.id}/>
//     ))
// }

const BusinessDetail = ({business,reviews}) =>{
    console.log(reviews)
   return(
      
         <div className='business-info'>

             <img className="business-pic" src={business.photoUrl}/>
             <div className='rating'>Rating:{business.business_rating || 'No reviews yet'}</div>
             <br />
             <div className='address'>Adress:{business.address}</div>
             <br />
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
