
import * as BusinessesAPIUtil from '../util/businesses_api_util';
export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const REFLESH_REVIEW = 'REFLESH_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveBusinesses = businesses =>({
     type: RECEIVE_ALL_BUSINESSES,
     businesses
})

const receiveBusiness = ({business,reviews}) =>({
       type: RECEIVE_BUSINESS,
       business,
       reviews
})

// const receiveReviews = reviews => ({
//        type: RECEIVE_REVIEWS,
//        reviews
//      });

const removeReview = reviewId => ({
       type: REMOVE_REVIEW,
       reviewId
     });

export const refleshReview = () =>({
         type: REFLESH_REVIEW,
})

export const receiveReview = ({review,business_rating}) =>({
       type: RECEIVE_REVIEW,
       review,
       business_rating
})

export const fetchReview = reviewId => dispatch =>(
        BusinessesAPIUtil.fetchReview(reviewId)
          .then(review =>dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => (
       BusinessesAPIUtil.createReview(review).then(
            review => (dispatch(receiveReview(review)))
       )
)

export const updateReview = review => dispatch => (
       BusinessesAPIUtil.updateReview(review)
         .then(review => dispatch(receiveReview(review)))
     );
     
export const deleteReview = reviewId => dispatch => (
       BusinessesAPIUtil.deleteReview(reviewId)
         .then(() => dispatch(removeReview(reviewId)))
     );

// export const deleteReview = reviewId => dispatch => (
//        BusinessesAPIUtil.deleteReview(reviewId)
//          .then(reviews => dispatch(receiveReviews(reviews)))
//      );

export const getAll = () => dispatch =>{
       return BusinessesAPIUtil.getAllBusinesses()
       .then(businesses => dispatch(receiveBusinesses(businesses)))
}

export const getOne  = id => dispatch =>(
        BusinessesAPIUtil.getBusiness(id)
        .then(business=>(dispatch(receiveBusiness(business))
        ))
 )

