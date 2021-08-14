import "./App.css";
import SinglePage from "./pages/SinglePage/SinglePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./pages/List/ListPage";
import { ADMIN, HOME, LIST, PRIVATE, SIGN_IN, SIGN_UP, SINGLE } from "./roures";
import Productpage from "./pages/ProductPage/Productpage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivateRoute from "./component/PrivateRoute";

import {useEffect} from "react";

import {useDispatch} from "react-redux";
import {isToken} from "./store/user/userAction";

function App() {
    let dispatch = useDispatch();

  useEffect(() => {
    dispatch(isToken);
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path={LIST} component={ListPage} />
          <Route path={SINGLE} component={SinglePage} />
          <Route path={ADMIN} component={Productpage} />
          <Route exact path={SIGN_IN} component={SignIn} />
          <Route exact path={SIGN_UP} component={SignUp} />
          <PrivateRoute exact path={PRIVATE} component={ProfilePage} />
          <Route path={HOME} component={ListPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
