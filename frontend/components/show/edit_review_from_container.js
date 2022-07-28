
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../util/businesses_api_util';

const mapStateToProps = (state,ownProps) =>{

    return {
       businessId: ownProps.match.params.businessId,
       userId: state.session.id,
       review
    }
}

const mapDispatchToProps = dispatch =>({
//   createReview: review => dispatch(createReview(review))
     updateReview: review => dispatch(updateReview(review))
     
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ReviewForm)