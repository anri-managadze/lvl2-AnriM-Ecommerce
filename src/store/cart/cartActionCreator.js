import {DEL_PRODUCT, SET_CART, SET_COOKIE, SET_DECR, SET_INCR} from "./cartActionConst";


export const setCart=(cart)=> {
    return {
        type: SET_CART,
        payload: cart
    }
}

export const deleteProducts = (id) => {
    return {
        type: DEL_PRODUCT,
        payload: id,
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

export const setCookieCart = (data) => {
    return {
        type: SET_COOKIE,
        payload: data,
    }
}