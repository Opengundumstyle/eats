import{
    RECEIVE_ALL_BUSINESSES ,
    RECEIVE_BUSINESS,
    RECEIVE_REVIEW,
    
} from '../actions/businesses_actions'

export default (oldstate ={},action)=>{
    Object.freeze(oldstate);
    const newState = Object.assign({},oldstate);
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses
        case RECEIVE_BUSINESS:
        
            // return Object.assign({},oldstate,{[action.business.id]:action.business})
             newState[action.business.id] = action.business
             return newState
      
        // case RECEIVE_REVIEW:
        //     const {review,business_rating} = action;
            
        //     newState[review.business_id].reviewIds.push(review.id)
        //     newState[review.business_id].business_rating =  business_rating
        //     return newState
            
        default: 
            return oldstate;
     }
}



