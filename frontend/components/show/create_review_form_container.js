import {connect} from 'react-redux'
import {createReview, getOne} from '../../actions/businesses_actions.js'
import ReviewForm from './review_form';


const mapStateToProps = (state,ownProps) =>{

      return {
         businessId: ownProps.match.params.businessId,
         business: state.entities.businesses[ownProps.match.params.businessId],
         userId: state.session.id,
         formType: 'create review'
      }
}

const mapDispatchToProps = dispatch =>({
    createReview: review => dispatch(createReview(review)),
    fetchBusiness: businessId=>dispatch(getOne(businessId))
    
})

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(ReviewForm)