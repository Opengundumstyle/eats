
import {connect} from 'react-redux';
import BusinessIndex from './business_index'
// import {asArray} from '../../reducers/selectors'
import { getAll} from '../../actions/businesses_actions';


const mapStateToProps = state =>{

      
      return{
        //   businesses: asArray(state.entities)
          businesses: Object.values(state.entities.businesses)
      }
}

const mapDispatchToProps = dispatch =>{
      return{
         getAll: () => dispatch(getAll())
      }
}

export default connect(
      mapStateToProps,
      mapDispatchToProps
      )(BusinessIndex)