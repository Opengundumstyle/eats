import {connect} from 'react-redux'
import {createReview} from '../../actions/businesses_actions.js'
import ReviewForm from './review_form';


const mapStateToProps = (state,ownProps) =>{

      return {
         businessId: ownProps.match.params.businessId,
         userId: state.session.id
      }
}

const mapDispatchToProps = dispatch =>({
    createReview: review => dispatch(createReview(review))
    
})

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(ReviewForm)