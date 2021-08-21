import {Api} from "../../api";
import {setLoading, setLogedIn, setUser} from "./userActionsCreator";


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
            .finally(()=>setLoading(false));
    }
}

export const updateUserProfile =
    (id, name,avatar) => (dispatch) => {
        Api.update(id, name,avatar)
            .then((data) => {
                dispatch(setUser(data))
                console.log(data)
            }
        );
    };