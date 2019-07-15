import { LOG_IN, LOG_OUT, NO_USER } from '../constants'

export const LOGIN = (user) => {
    if(user)
        return { type: LOG_IN, payload: user }
    else
        return { type: NO_USER } 
}

export const LOGOUT = () => {
    return { type: LOG_OUT }
}