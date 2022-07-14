import { RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER} from '../actions/session_actions'

export default(state={},action) =>{
    Object.freeze(state);
    let newState = {}
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
           return Object.assign({}, state, { [action.user.id]: action.user })
        case LOGOUT_CURRENT_USER:
            return  newState;
        default:
            return state;
            
    }
}


// users: {
//     2: {
//         id: 2,
//         username: "sss"
//     }
// }
