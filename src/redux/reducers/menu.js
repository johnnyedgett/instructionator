import { TOGGLE_LEFT_MENU } from '../constants';

const initialState = {
    leftMenuOpen: false,
    profileMenuOpen: false
};

const menu = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_LEFT_MENU:
            return Object.assign({}, state, {
                leftMenuOpen: !state.leftMenuOpen
            })
        default:
            return state;
    }
};

export default menu;