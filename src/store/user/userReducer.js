import {SET_TOKEN, SET_USER} from "./userActionConst";

const initialState = {
    user: {},
    isLoggingIn: false,
    isLogedIn: false,
    isLogedOut: true,
    token: ''
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER:
            return  {
                ...state,
                user: action.payload
            }
        case SET_TOKEN :
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}