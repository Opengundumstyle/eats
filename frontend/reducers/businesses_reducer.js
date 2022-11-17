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
             newState[action.business.id] = action.business
             return newState
        default: 
            return oldstate;
     }
}



