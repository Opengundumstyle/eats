import React from 'react';

const ReviewIndex = ({review}) =>{
      const {rating, body} = review
      console.log(rating)
      console.log(body)
      return (
           <div className='review'>
               <ul>
                    <li> Rating:{rating} </li>
                    <li>{body}</li>
               </ul>
           </div>
      )
}

export default ReviewIndex