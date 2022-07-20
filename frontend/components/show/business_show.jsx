import {Link} from 'react-router-dom';
import BusinessDetail from './business_detail'
import  CreateFormContainer from'./create_review_form_container'
import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';
import  Map from '../map/map';
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
    const businessId = business.id
    if (business === undefined) return null
        
    return (
        <div>
            <h1>{business.name}</h1>
            <Link to="/">Back to view more businesses</Link>
           <Map/>
          <BusinessDetail business={business} reviews={reviews}/>
         <ReviewLink 
            className ="review-button"
             component={CreateFormContainer}
             to={`/businesses/${businessId}/review`}
              label="Leave a Review" 
        /> 
            <ProtectedRoute
             path="/businesses/:business/review"
             component={CreateFormContainer}
            />
        </div>
    )
  }
}


export default BusinessShow


