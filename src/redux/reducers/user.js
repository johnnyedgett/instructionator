import { LOG_IN } from '../constants'
import { LOG_OUT } from '../constants'

const initialState ={
    loggedIn: false,
    currentUser: {}
}

const user = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            return Object.assign({}, state, {
                loggedIn: true,
                currentUser: action.payload
            })
        case LOG_OUT:
            return Object.assign({}, state, {
                loggedIn: false,
                currentUser: {}
            })
        default:
            return state;
    }
}

export default user