import React,{useRef} from 'react';
import { useDetectOutsideClick } from '../greeting/greeting_util';
import { Link } from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
import {FaRegStarHalf,FaRegStar} from 'react-icons/fa'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ReviewIndex = (props) =>{
      const review = props.review
      const {rating,body,reviewer} = review
      const currentUserId = props.currentUserId
      const businessId = props.businessId

      const dropdownRef = useRef(null)
      const [isActive,setIsActive] = useDetectOutsideClick(dropdownRef,false)

      const onClick =()=> setIsActive(!isActive)
     
      const displayEditDelete =()=>{

          return (
               <div className='review-dropdown'>

                    <button  className= 'review-dropbtn' onClick={onClick} > 
                         < HiOutlineDotsHorizontal size="1.3rem" ref={dropdownRef} className={isActive ?'active':'inactive'}/>
                    </button>

                    <div ref={dropdownRef} className={`review-menu ${isActive ? 'active' : 'inactive'}`}>

                         <div className='edit-review-button'>
                           <Link to={{pathname:`/reviews/edit/${review.id}/business/${businessId}`,state:body}} className='edit-link'>Edit&nbsp;review</Link>
                        </div>

                         <div onClick={()=>props.deleteReview(review.id)} className='deleteReview-button'>
                              Remove review
                         </div>
                       
                    </div>
               </div>
          )
     }

     const displayStar =(rating)=>{

          let displayStar 
     
        switch (rating) {
            case 1:
              displayStar = <FaRegStar color="red"/>
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
                              {review.user_id === currentUserId ?
                              displayEditDelete() : null }
                    <div className='name-rating-body'> 
                         <div className='name-icon-show'>
                              <IoPersonCircleSharp size='5em' color='gray'/>
                              <div className='reviwer-name'>{reviewer}</div>
                         </div>
                         { displayStar(rating)}
                         <div className='review'>{body}</div>
                    </div> 
                    <br />
             </div>
      )
}

export default ReviewIndex