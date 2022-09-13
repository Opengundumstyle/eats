import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
import {FaRegStarHalf,FaRegStar} from 'react-icons/fa'

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

     const displayStar =(rating)=>{

          let displayStar 
     
        switch (rating) {
            case 1:
              displayStar = <FaRegStar color="yellow"/>
                break;
            case 1.5:
                displayStar = <div><FaRegStar color="red"/><br /><FaRegStarHalf color="yellow"/></div>
                break;
            case 2:
                displayStar = <div><FaRegStar color="red"/><FaRegStar  color="red"/></div>
                break;
            case 2.5: 
                 displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStarHalf color="red"/></div>
                 break;
            case 3:
                displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="red"/></div>
                break;
            case 3.5:
                displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStarHalf color="red"/></div>
                break;
             case 4:
                 displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="gold"/></div>
                break;   
             case 4.5:
                displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="gold"/><FaRegStarHalf color="gold"/></div>
                break;
             case 5:
                displayStar = <div><FaRegStar color="gold"/><FaRegStar color="gold"/><FaRegStar color="gold"/><FaRegStar color="gold"/><FaRegStar color="gold"/></div>
                break;
            default:
                break;
        }

        return displayStar
        
     }




      return (
           <div className='review'>
                    <div className='name-rating-body'>
                         <div className='name-icon-show'>
                              <IoPersonCircleSharp size='5em' color='gray'/>
                              <div className='reviwer-name'>{reviewer}</div>
                         </div>
                         { displayStar(rating)}
                         <div className='review'>{body}</div>
                    </div> 
                      {review.user_id === currentUserId ? displayEditDelete() : null }
                    <br />
             </div>
      )
}

export default ReviewIndex