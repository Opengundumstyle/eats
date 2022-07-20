import {connect} from 'react-redux'
import BusinessShow from './business_show'
import {getOne,createReview, refleshReview} from '../../actions/businesses_actions'
import {selectBusiness} from '../../reducers/selectors';

const mapStateToProps = (state,{match}) =>{
     const businessId = parseInt(match.params.businessId);
     const business = selectBusiness(state.entities,businessId);
     const reviews = state.entities.reviews
     return {
          businessId,
          business,
          reviews
     }
}

const mapDispatchToProps = dispatch => ({
     getOne: id => dispatch(getOne(id)),
     createReview: review =>dispatch(createReview(review)),
     refleshReview: ()=>dispatch(refleshReview())
     
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BusinessShow)