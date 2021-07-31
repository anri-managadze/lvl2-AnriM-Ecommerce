import { serializeProductList } from "./serializes/product";
import { serializeSingleProduct } from "./serializes/single";
import {user} from "./store/UserContextProvider";


export const Api = {
  baseUrl: "http://159.65.126.180/api/",
  getData: function (url, params, method = "get") {
    return fetch(this.baseUrl + url, {

      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(params),
    })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res);
          }
        })

  },
  getProductList: function (page) {
    return Api.getData( 'products?page='+page)
      .then((json) => {
        return serializeProductList(json.data);
      });
  },

  getSingleProduct: (id) => {
    return Api.getData(`products/${id}`)
      .then((json) => {
        return serializeSingleProduct(json);
      });
  },
  sighIn: function (email,password) {
    return Api.getData("auth/login",{email,password},'POST')
  },
    sighUp: function (name,email, password,password_confirmation) {
        return Api.getData("register",{name,email, password,password_confirmation},'post');
    },
    privatePage: function () {
        fetch(' http://159.65.126.180/api/auth/me',{
            method: 'POST',
            body: JSON.stringify(
                {
                    access_token: user.token.access_token,
                }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${user.token.access_token}`
            }
        })
    }

};
