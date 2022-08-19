
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, fetchReview } from '../../actions/businesses_actions';


const mapStateToProps = (state,ownProps) =>{
  
    return {
       businessId: ownProps.match.params.businessId,
       userId: state.session.id,
       formType: 'edit review', 
       reviewId:parseInt(ownProps.match.params.reviewId),
       review: (Object.values(state.entities.reviews))[0],
      //  review:state.entities.reviews.reviewId
    }
}

const mapDispatchToProps = dispatch =>({
     updateReview: review => dispatch(updateReview(review)),
     fetchReview: reviewId => dispatch(fetchReview(reviewId))
     
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ReviewForm)