import {RECEIVE_REVIEWS,RECEIVE_REVIEW,RECEIVE_BUSINESS,REFLESH_REVIEW,REMOVE_REVIEW} from "../actions/businesses_actions" 


const reviewReducer = (oldState={},action)=> {
       Object.freeze(oldState);
       const nextState = Object.assign({},oldState)
            switch (action.type) {
                case RECEIVE_BUSINESS:
                     return action.reviews || {}
                case RECEIVE_REVIEWS:
                    
                case REMOVE_REVIEW:
                      delete nextState[action.reviewId]
                      return nextState
                case RECEIVE_REVIEW:
                      return Object.assign({},oldState,{[action.review.id]:action.review})
                case REFLESH_REVIEW:
                     oldState = {}
                default:
                    return oldState; 
            }
}





export default reviewReducer