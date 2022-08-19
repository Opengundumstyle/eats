import {Link} from 'react-router-dom';
import BusinessDetail from './business_detail'
import  CreateFormContainer from'./create_review_form_container'
import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';
import  Map from '../map/map';
import Navbar from '../nav/navbar';

class BusinessShow  extends React.Component{
      
  componentDidMount(){
   
     this.props.getOne(this.props.businessId)
        
  }
   componentWillUnmount(){
      this.props.refleshReview()
   }

 
   
  render(){
  
    const reviews = Object.values(this.props.reviews)
    const business = this.props.business
    const businessId = this.props.businessId
  
    console.log('business',business)
    console.log('businessId',businessId)
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


