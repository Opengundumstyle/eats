import {Link} from 'react-router-dom';
import BusinessDetail from './business_detail'
import  CreateFormContainer from'./create_review_form_container'
import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';
import  Map from '../map/map';
import Navbar from '../nav/navbar_container';
import {FaRegStarHalf,FaRegStar} from 'react-icons/fa'

class BusinessShow  extends React.Component{
      
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

  reviewsNums(reviews){
    let counts = 0;
    for(let i = 0; i < reviews.length; i++){
        counts += 1;
    }

    return counts===0?'no reviews yet':counts
  
  }
  
  
  render(){
  
    const reviews = Object.values(this.props.reviews)
    const business = this.props.business
    const businessId = this.props.businessId
    const rating = this.getRating(business.business_rating)
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
           </div>
           
          <div className='showpage-info'>
                  <div className='showpage-rating'>
                      {displayStar} 
                      <div className='rating-counts'>{`${this.reviewsNums(reviews)} reviews`} </div>
                  </div>
                  
                  <div className='showpage-status-price-categories'>
                      <div>claimed</div>
                      <div>{business.price}</div>
                      <div>categories</div>
                  </div>
                
                  <div className='showpage-businesshour'>{`Open ${business.openhour} - ${business.closehour}`}</div>
           </div>
           
           <br />
             
            <Link to="/" className="back-to-home">view more businesses</Link>

            <div className='write-review'>
             <button className='submit-review'><ReviewLink 
                className ="review-button"
                component={CreateFormContainer}
                to={`/businesses/${businessId}/review`} label="Write a review"
              />  </button>
                <ProtectedRoute
                path="/businesses/:businessId/review"
                component={CreateFormContainer}
                />
           </div>

           <div>
            <BusinessDetail businessId={businessId} business={business} reviews={reviews}/>
          </div>
 
           {/* <div className='business-map'><Map/></div> */}
           {/* <div className='show-map'>
             <Map/>
           </div> */}
        
        </div>
    )
  }
}


export default BusinessShow


