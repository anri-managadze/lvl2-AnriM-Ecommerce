import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {UserContext} from "./UserContextProvider";
import {HOME} from "../roures";
import Loader from "../component/Loader";


const PrivateRoute = ({component: Component, ...rest}) => {
    const userData=useContext(UserContext);


    return (
        <Route {...rest} render={props => (
            userData.data.isLogedIn  ?
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