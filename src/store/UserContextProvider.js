import React, {useState} from "react";
import {Api} from "../api";

export const user =JSON.parse(localStorage.getItem('userinfo'));

if (user) {
    Api.privatePage()
}

export const UserContext=React.createContext({});


export const UserContextProvider = ({children}) => {
    let [data,setData]= useState( {
        isLogedIn: false,
        isLogedOut: true,
        user: null
    });
    return (
        <UserContext.Provider value={
            {
                data,
                setData
            }
        }>
            {children}
        </UserContext.Provider>
    );
};





