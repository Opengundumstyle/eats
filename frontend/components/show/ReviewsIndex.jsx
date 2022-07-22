import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndex = (props) =>{
      const review = props.review
      const {rating, body} = review
      const currentUserId = props.currentUserId
     
     
     const displayEditDelete =()=>{
          return (
               <div>
                   <Link to='/reviews/edit/:reviewId'>Edit Review</Link>
                  <button onClick={()=>props.deleteReview(review.id)}>
                       deleteReview
                  </button>
               </div>
          )
     }

      return (
           <div className='review'>
               
                  <div>
                    <div></div>
                    <div> Rating:{rating} </div>
                    <div>{body}</div>
                     {review.user_id === currentUserId ? displayEditDelete() : null}
                     </div> 
                      <br />
             </div>
      )
}

export default ReviewIndex