import {serializeProductList} from "./serializes/product";
import {serializeSingleProduct} from "./serializes/single";


export const Api = {

    getProductList: function () {
        return fetch('http://159.65.126.180/api/products')
            .then(res=>res.json())
            .then(json=> {
                return serializeProductList(json.data);
            })
    },

    getSingleProduct : (id) => {
        return fetch(`http://159.65.126.180/api/products/${id}`)
            .then(res=>res.json())
            .then(json=> {
                return serializeSingleProduct(json);
            })
    }

}