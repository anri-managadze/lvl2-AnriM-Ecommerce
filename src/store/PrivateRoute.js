import React, {useContext} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {UserContext} from "./UserContextProvider";
import {SIGN_IN} from "../roures";


const PrivateRoute = ({component: Component, ...rest}) => {
    const userData=useContext(UserContext);
    let location = useLocation();
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            userData.data.isLogedIn  ?
                <Component {...props} />
                :  <Redirect to={{
                    pathname: SIGN_IN,
                state: {
                        from: location
                        }
                }} />
        )} />
    );
};

export default PrivateRoute;