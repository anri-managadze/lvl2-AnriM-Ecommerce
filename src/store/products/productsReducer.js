import {SET_CART, SET_DECR, SET_INCR, SET_PRODUCTS, SET_SINGLE} from "./productsActionConst";

const initialState = {
    products: [],
    single: {},
    cart: [],
    counter: 0
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return  {
                ...state,
                products: action.payload
            }
        case SET_SINGLE:
            return  {
                ...state,
               single: action.payload
            }
        case SET_CART:
            return  {
                ...state,
                cart: action.payload
            }
        case SET_INCR:
            return  {
                ...state,
                counter: action.payload
            }
        case SET_DECR:
            return  {
                ...state,
                counter: action.payload
            }
        default:
            return state
    }
}