import {connect} from 'react-redux'
import ReviewsIndex from './ReviewsIndex'


const mapStateToProps = ({review}) =>{

   return{
    review: review

   }
}

export default connect(
    mapStateToProps
)(ReviewsIndex)




