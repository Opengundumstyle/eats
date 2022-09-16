
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, fetchReview,getOne } from '../../actions/businesses_actions';


const mapStateToProps = (state,ownProps) =>{
  
    return {
       businessId: ownProps.match.params.businessId,
       business: state.entities.businesses[ownProps.match.params.businessId],
       userId: state.session.id,
       formType: 'edit review', 
       reviewId:parseInt(ownProps.match.params.reviewId),
       review: (Object.values(state.entities.reviews))[0],
     
    }
}

const mapDispatchToProps = dispatch =>({
     updateReview: review => dispatch(updateReview(review)),
     fetchReview: reviewId => dispatch(fetchReview(reviewId)),
     fetchBusiness: businessId=>dispatch(getOne(businessId))
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ReviewForm)