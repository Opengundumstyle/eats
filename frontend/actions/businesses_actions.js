
import * as BusinessesAPIUtil from '../util/businesses_api_util';
export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REFLESH_REVIEW = 'REFLESH_REVIEW'
const receiveBusinesses = businesses =>({
     type: RECEIVE_ALL_BUSINESSES,
     businesses
})

const receiveBusiness = ({business,reviews}) =>({
       type: RECEIVE_BUSINESS,
       business,
       reviews
     
})


export const refleshReview = () =>({
         type: REFLESH_REVIEW,
})


export const receiveReview = ({reviews,business_rating}) =>({
       type: RECEIVE_REVIEW,
       reviews,
       business_rating
})

export const createReview = review => dispatch => (
       BusinessesAPIUtil.createReview(review).then(
            review => (dispatch(receiveReview(review)))
       )
)

export const getAll = () => dispatch =>{
       return BusinessesAPIUtil.getAllBusinesses()
       .then(businesses => dispatch(receiveBusinesses(businesses)))
}

export const getOne  = id => dispatch =>(
        BusinessesAPIUtil.getBusiness(id)
        .then(business=>(dispatch(receiveBusiness(business))
        ))
 )

