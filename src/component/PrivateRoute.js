import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {UserContext} from "../store/UserContextProvider";
import {HOME} from "../roures";
import {selectLogedIn} from "../store/user/userSelector";
import {useSelector} from "react-redux";


const PrivateRoute = ({component: Component, ...rest}) => {
    // const userData=useContext(UserContext);
    const token =localStorage.getItem('token');
    const isLogedIn = useSelector(selectLogedIn)

    console.log(isLogedIn)
    return (
        <Route {...rest} render={props => (
            isLogedIn || token  ?
                    <Component {...props} />
                :  <Redirect to={{
                    pathname: HOME,
                state: {
                        from: props.location
                        }
                }} />
        )} />
    );
};

export default PrivateRoute;

