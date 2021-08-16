import {SET_LOADING, SET_LOGEDIN, SET_TOKEN, SET_USER} from "./userActionConst";

export const setUser=(user)=> {
    return {
        type: SET_USER,
        payload: user
    }
}

export const setLogedIn=(isLogedIn)=> {
    return {
        type: SET_LOGEDIN,
        payload: isLogedIn
    }
}
export const setLoading=(isLoading)=> {
    return {
        type: SET_LOADING,
        payload: isLoading
    }
}


export const setToken=(token)=> {
    return {
        type: SET_TOKEN,
        payload: token
    }
}