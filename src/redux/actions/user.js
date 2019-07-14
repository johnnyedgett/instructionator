import { LOG_IN, LOG_OUT } from '../constants'

export const  LOGIN = (user) => {
    return { type: LOG_IN, payload: user }
}

export const LOGOUT = () => {
    return { type: LOG_OUT }
}