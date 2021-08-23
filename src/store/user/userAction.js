import {Api} from "../../api";
import {setLoading, setLogedIn, setToken, setUser} from "./userActionsCreator";


export const SignInAction=(email,password)=> (dispatch)=> {
        dispatch(setLoading(true))
        return Api.sighIn(email,password)
            .then((json) => {
                dispatch(setUser(json.user))
                dispatch(setLogedIn(true))
                dispatch(setToken(json.token.access_token))
                localStorage.setItem('token',json.token.access_token);
                return json
            })
    }

export const isToken = (dispatch) => {
    const token =localStorage.getItem('token');
    if (token) {
        dispatch(setLoading(true))
        Api.privatePage()
            .then((json) => {
                dispatch(setUser(json))
                dispatch(setLogedIn(true))
                return json
            })
            .catch((error) => {
                console.log(error)
                localStorage.removeItem('token')
            })
            .finally(()=>dispatch(setLoading(false)));
    }
}

export const updateUserProfile = (id, name,avatar) => (dispatch) => {
        dispatch(setLoading(true))
        return Api.update(id, name,avatar)
            .then((data) => {
                dispatch(setUser(data))
                console.log(data)
                return data
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => dispatch(setLoading(false)))
    };