import{
    RECEIVE_ALL_BUSINESSES 
} from '../actions/businesses_actions'

export default (oldstate ={},action)=>{
    Object.freeze(oldstate);
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses
        default:
            return oldstate
     }
}



