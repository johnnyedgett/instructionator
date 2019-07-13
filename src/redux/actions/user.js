import { LOG_IN, LOG_OUT } from '../constants'

export const LOG_IN = (user) => {
    return { type: LOG_IN, payload: user }
}

export const LOG_OUT = () => {
    return { type: LOG_OUT }
}