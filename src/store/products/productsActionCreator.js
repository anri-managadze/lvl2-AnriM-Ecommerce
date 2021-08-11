import {SET_PRODUCTS} from "./productsActionConst";


export const setProducts=(products)=> {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}