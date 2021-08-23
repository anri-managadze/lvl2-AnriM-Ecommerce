import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {UserContext} from "../store/UserContextProvider";
import {HOME} from "../roures";
import {selectLoading, selectLogedIn} from "../store/user/userSelector";
import {useSelector} from "react-redux";
import Loader from "./Loader";


const PrivateRoute = ({component: Component, ...rest}) => {
    // const userData=useContext(UserContext);
    const token =localStorage.getItem('token');
    const isLogedIn = useSelector(selectLogedIn)
    const loading=useSelector(selectLoading)

    console.log(isLogedIn)
    return (
        <Route {...rest} render={props => (
            isLogedIn || token  ?
                <Loader isLoading={loading}>
                    <Component {...props} />
                </Loader>
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

