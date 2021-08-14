import {Api} from "../../api";
import {setLogedIn, setUser} from "./userActionsCreator";


// export const SignInAction=(email,password)=>{
//
//     return (dispatch)=> {
//         Api.sighIn(email,password)
//             .then((json) => {
//                 dispatch(setLogedIn(true))
//                 dispatch(setUser(json.user))
//                 localStorage.setItem('token',json.token.access_token);
//             })
//             .catch((error) => {
//                     console.log(error, "error")
//                 }
//             );
//     }
// }

export const isToken = (dispatch) => {
    const token =localStorage.getItem('token');
    if (token) {
        Api.privatePage()
            .then((json) => {
                dispatch(setUser(json))
                dispatch(setLogedIn(true))
            })
            .catch((error) => {
                console.log(error)
                localStorage.removeItem('token')
            });
    }
}