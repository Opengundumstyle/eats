import {connect} from 'react-redux'
import BusinessShow from './business_show'
import {getOne} from '../../actions/businesses_actions'
import {selectBusiness} from '../../reducers/selectors';

const mapStateToProps = (state,{match}) =>{
     const businessId = parseInt(match.params.businessId);
     const business = selectBusiness(state.entities,businessId);
     return {
          businessId,
          business
     }
}


const mapDispatchToProps = dispatch => ({
     getOne: id => dispatch(getOne(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BusinessShow)