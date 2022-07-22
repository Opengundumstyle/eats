import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';


const mapStateToProps = (state,ownProps) =>{

    return {
       businessId: ownProps.match.params.businessId,
       userId: state.session.id,
       review
    }
}

const mapDispatchToProps = dispatch =>({
//   createReview: review => dispatch(createReview(review))
     updateReview
     
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ReviewForm)