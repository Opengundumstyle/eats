
import * as BusinessesAPIUtil from '../util/businesses_api_util';
export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

const receiveBusinesses = businesses =>({
     type: RECEIVE_ALL_BUSINESSES,
     businesses
})

const receiveBusiness = business =>({
       type: RECEIVE_BUSINESS,
       business
})


export const getAll = () => dispatch =>{
       return BusinessesAPIUtil.getAllBusinesses()
       .then(businesses => dispatch(receiveBusinesses(businesses)))
}

export const getOne  = id => dispatch =>(
        BusinessesAPIUtil.getBusiness(id)
        .then(business=>(dispatch(receiveBusiness(business))
        ))
 )

