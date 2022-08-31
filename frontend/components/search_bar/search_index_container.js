import SearchIndex from "./search_index"
import { getAll } from "../../actions/businesses_actions"
import { connect } from "react-redux"

const mapStateToProps =(state)=>{
   return {
      businesses:state.entities.businesses
   }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        getBusinesses:()=> dispatch(getAll())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchIndex)

