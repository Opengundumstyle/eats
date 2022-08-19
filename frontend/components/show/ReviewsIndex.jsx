import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndex = (props) =>{
      const review = props.review
      const {rating,body,reviewer} = review
      const currentUserId = props.currentUserId
      const businessId = props.businessId
     
     const displayEditDelete =()=>{

          console.log('see the body',body)

          return (
               <div>
                   <Link to={{pathname:`/reviews/edit/${review.id}/business/${businessId}`,state:body}}>Edit Review</Link> 
                    
                  <button onClick={()=>props.deleteReview(review.id)}>
                       deleteReview
                  </button>
                  
               </div>
          )
     }

      return (
           <div className='review'>
               
                  <div>
                    <div>{reviewer}</div>
                    <div> Rating:{rating} </div>
                    <div>{body}</div>
                     {review.user_id === currentUserId ? displayEditDelete() : null }
                     </div> 
                      <br />
             </div>
      )
}

export default ReviewIndex