import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {UserContext} from "../store/UserContextProvider";
import {HOME} from "../roures";
import Loader from "./Loader";
import {setUser} from "../store/user/userActionsCreator";

const PrivateRoute = ({component: Component, ...rest}) => {
    // const userData=useContext(UserContext);
    const token =localStorage.getItem('token');

    return (
        <Route {...rest} render={props => (
            setUser.isLogedIn || token  ?
                <Loader >
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