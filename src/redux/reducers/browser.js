import { DESKTOP, ANDROID_PHONE, ANDROID_TABLET, APPLE_PHONE, APPLE_TABLET } from '../constants'

const initialState = {
    browserType: '',
    isMobile: false
}

const browser = (state = initialState, action) => {
    switch(action.payload){
        case DESKTOP:
            return Object.assign({}, state, {
                brwoserType: DESKTOP, 
                isMobile: false
            })
        case APPLE_PHONE:
            return Object.assign({}, state, {
                browserType: APPLE_PHONE,
                isMobile: true
            })
        default:
            return state;
    }
};

export default browser