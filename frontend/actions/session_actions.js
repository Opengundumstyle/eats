
import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER' 
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveCurrentUser = user =>({
      type: RECEIVE_CURRENT_USER,
      user,
})

const logoutCurrentUser = () => ({
       type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) =>({
       type: RECEIVE_SESSION_ERRORS,
       errors,
})

export const clearErrors = (errors)=>({
        type: CLEAR_ERRORS,
        errors
})

export const clearComments = ()=>({
        type: LOGOUT_CURRENT_USER
})

export const signup = formUser => dispatch => { 
       return    (
    SessionAPIUtil.signup(formUser)
               .then(user => dispatch(receiveCurrentUser(user)),
                err => ( dispatch(receiveErrors(err.responseJSON)))
               ))}


export const login = formUser => dispatch => (
        SessionAPIUtil.login(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => (dispatch(receiveErrors(err.responseJSON)))
       ))

 export const logout = () => dispatch =>(
            SessionAPIUtil.logout()
                .then(() => dispatch(logoutCurrentUser()))
                )
                    




