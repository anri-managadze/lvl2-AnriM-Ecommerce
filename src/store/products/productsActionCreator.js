import {SET_PRODUCTS, SET_SINGLE} from "./productsActionConst";


export const setProducts=(products)=> {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}


