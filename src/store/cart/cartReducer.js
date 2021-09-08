import {SET_CART, SET_DECR, SET_INCR} from "./cartActionConst";


const initialState = {
    cart: [],
    counter: 0
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            return  {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
        case SET_INCR:
            return  {
                ...state,
                counter: action.payload + 1
            }
        case SET_DECR:
            return  {
                ...state,
                counter: action.payload - 1
            }
        default:
            return state
    }
}