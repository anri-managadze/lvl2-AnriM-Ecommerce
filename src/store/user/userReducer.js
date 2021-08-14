import {SET_LOADING, SET_LOGEDIN, SET_TOKEN, SET_USER} from "./userActionConst";

const initialState = {
    user: {},
    isLogedIn: false,
    isLoading: false,
    token: ''
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return  {
                ...state,
                user: action.payload
            }
            case SET_LOGEDIN :
                return {
                    ...state,
                    isLogedIn: action.payload
                }
                case SET_LOADING :
                return {
                    ...state,
                    isLoading: action.payload
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