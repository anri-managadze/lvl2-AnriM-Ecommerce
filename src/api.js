import { serializeProductList } from "./serializes/product";
import { serializeSingleProduct } from "./serializes/single";
import { serialize } from "object-to-formdata";

export const Api = {
  baseUrl: "http://fakestoreapi.com/",
  getData: function (url, params, method = "get",isFile) {
      let headers = {};

      if (!isFile) {
          headers = {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
          };
      } else {
          headers = {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
          };
      }
    return fetch(this.baseUrl + url, {
      method: method.toUpperCase(),
      headers,
      body: isFile ? serialize(params) : JSON.stringify(params),
    })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('');
          }
        })
  },
  getProductList: function (page) {
    return Api.getData( 'products?page='+page)
      .then((json) => {
        return serializeProductList(json); // json.data შევცვალე დროებით რომ წამოეღო ინფორმაცია... !!
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
        return Api.getData('auth/me',{},'post')
    },

    update: function (id,name,avatar) {
      return Api.getData(`users/${id}/update`, {name,avatar},'post',true)
    }
};
