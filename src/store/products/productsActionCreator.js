import {SET_CART, SET_INCR, SET_PRODUCTS, SET_SINGLE} from "./productsActionConst";


export const setProducts=(products)=> {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const setSingle=(single)=> {
    return {
        type: SET_SINGLE,
        payload: single
    }
}

export const setCart=(cart)=> {
    return {
        type: SET_CART,
        payload: cart
    }
}
export const setIncr=(incr)=> {
    return {
        type: SET_INCR,
        payload: incr+1
    }
}
export const setDecr=(decr)=> {
    return {
        type: SET_INCR,
        payload: decr-1
    }
}