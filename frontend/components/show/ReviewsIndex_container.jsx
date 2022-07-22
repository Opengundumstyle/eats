import {connect} from 'react-redux'
import ReviewsIndex from './ReviewsIndex'
import { deleteReview } from '../../actions/businesses_actions'

const mapStateToProps = (state) =>{

   return{
     currentUserId: state.session.id
   }
}

const mapDispatchToProps = (dispatch)=>{
    return{
       deleteReview: reviewId =>dispatch(deleteReview(reviewId))
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(ReviewsIndex)




