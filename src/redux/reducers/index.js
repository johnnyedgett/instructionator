import { combineReducers } from 'redux'
import base from './base'
import menu from './menu'
import user from './user'

export default combineReducers({
    menu,
    base,
    user
})