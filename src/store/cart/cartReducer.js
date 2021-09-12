import {DEL_PRODUCT, SET_CART, SET_DECR, SET_INCR} from "./cartActionConst";


const initialState = {
    cart: [],
    counter: 1
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            return  {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
        case DEL_PRODUCT:
            return  {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload,
                ),
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