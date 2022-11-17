import {Link} from 'react-router-dom';
import BusinessDetail from './business_detail'
import  CreateFormContainer from'./create_review_form_container'
import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';
import Navbar from '../nav/navbar_container';
import {FaRegStarHalf,FaRegStar} from 'react-icons/fa'
import {IoMdStarOutline} from "react-icons/io";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

class BusinessShow extends React.Component{
      
  componentDidMount(){
     
     this.props.getOne(this.props.businessId)
        
  }
   componentWillUnmount(){
      this.props.refleshReview()
   }

  getRating(rating){
    let newRating  = Math.floor(rating)
    if(rating - newRating >= 0.5) {
          newRating = newRating + 0.5
    }

    return newRating

  }

  getCategory(categories){
    let categoriesStr = ''
     for(let i = 0 ; i < categories.length -1 ; i++){
         categoriesStr = categoriesStr + categories[i] +', '
     }
     return categoriesStr + categories[categories.length-1]
  }

  reviewsNums(reviews){
    let counts = 0;
    for(let i = 0; i < reviews.length; i++){
        counts += 1;
    }
    return counts
  }
  
  
  render(){
   
    const reviews = Object.values(this.props.reviews)
    const business = this.props.business
    const businessId = this.props.businessId
    const rating = this.getRating(business.business_rating)
   
    let categoryArr = []

    for(let catogory in business.categoriesItem ){
       categoryArr.push(catogory)
    }

    const categoryStr = this.getCategory(categoryArr)
    

    let displayStar 
     
    switch (rating) {
        case 1:
          displayStar = <div> <FaRegStar color="yellow"/></div>
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

    if (business === undefined) return null
        
    return (
        <div>
            <Navbar/>
            <div className='show-business-name'>
                <h1>{business.name}</h1>
             </div>
            <div className='showcase-photos'>
                  <div><img className="business-pic" src={business.photoUrl}/></div>
                  <div><img className="business-pic" src={business.photoUrl}/></div>
                  <div><img className="business-pic2" src={business.photoUrl}/></div>
                  <div><img className="business-pic3" src={business.photoUrl}/></div>
           </div>
           
          <div className='showpage-info'>
                  <div className='showpage-rating'>
                      {displayStar} 
                      {this.reviewsNums(reviews) === 0? <div className='no-review-tag'>no reviews yet</div>:
                      <div className='rating-counts'>{`${this.reviewsNums(reviews)}`}&nbsp;review </div>
                      }
                  </div>
                  
                  <div className='showpage-status-price-categories'>
                     <div className='claim-div'>
                      <div><MdOutlineCheckCircleOutline color='rgba(88,180,255,1)'/></div>
                      <div className='claimtag'>Claimed</div>
                    </div>
                          
                      <div className='show-dot'>•</div>
                      <div>{business.price}</div>
                      <div className='show-dot'>•</div>
                      <div className='categoryStr'>{categoryStr}</div>
                  </div>
                
                  <div className='showpage-businesshour'>
                       <div className='open-tag'>Open</div> 
                       <div>{`${business.openhour} - ${business.closehour}`}</div>
                </div>
           </div>
           
           <br />
             
            <Link to="/businesses" className="back-to-home">view more businesses</Link>
            
            <div className='write-review'>
             <button className='submit-review'>
              <div><IoMdStarOutline color='white' size='2.5em' /></div> 
              <div> <ReviewLink 
                component={CreateFormContainer}
                to={`/businesses/${businessId}/review`} label="Write a review" 
              /> </div>  </button>
                <ProtectedRoute
                path="/businesses/:businessId/review"
                component={CreateFormContainer}
                />
            </div>
           <div>
            <BusinessDetail businessId={businessId} business={business} reviews={reviews}/>
          </div>
 
        
        </div>
    )
  }
}


export default BusinessShow


