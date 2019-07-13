import { combineReducers } from 'redux'
import base from './base'
import menu from './menu'
import user from './user'
import browser from './browser'

export default combineReducers({
    menu,
    base,
    user,
    browser
})