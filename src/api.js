import {serializeProductList} from "./serializes/product";
import {serializeSingleProduct} from "./serializes/single";


export const Api = {
    baseUrl: 'http://159.65.126.180/api/',
        getData: function (url,params,method='get'){
            return fetch(this.baseUrl+url, {
                method: method.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(params)
            })
        },

    getProductList: function () {
        return Api.getData('products')
            .then(res=>res.json())
            .then(json=> {
                return serializeProductList(json.data);
            })
    },

    getSingleProduct : (id) => {
        return Api.getData(`products/${id}`)
            .then(res=>res.json())
            .then(json=> {
                return serializeSingleProduct(json);
            })
    },
    postSighIn: function () {
        return Api.getData('auth/login')
    },
}