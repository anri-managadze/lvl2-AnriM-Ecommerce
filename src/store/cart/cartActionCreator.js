import {SET_CART, SET_DECR, SET_INCR} from "./cartActionConst";


export const setCart=(cart)=> {
    return {
        type: SET_CART,
        payload: cart
    }
}
export const setIncr=(incr)=> {
    return {
        type: SET_INCR,
        payload: incr
    }
}
export const setDecr=(decr)=> {
    return {
        type: SET_DECR,
        payload: decr
    }
}