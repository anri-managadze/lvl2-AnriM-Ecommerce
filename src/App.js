import "./App.css";
import SinglePage from "./pages/SinglePage/SinglePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./pages/List/ListPage";
import { ADMIN, HOME, LIST, PRIVATE, SIGN_IN, SIGN_UP, SINGLE } from "./roures";
import Productpage from "./pages/ProductPage/Productpage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import PrivateRoute from "./component/PrivateRoute";
import {Api} from "./api";
import { useEffect} from "react";

import {setToken, setUser} from "./store/user/userActionsCreator";
import {useDispatch} from "react-redux";



function App() {
    // const userData=useContext(UserContext);
  const isToken = () => {
    const token =localStorage.getItem('token');
    if (token) {

      Api.privatePage()
          .then((json) => {
              dispatch(setUser( {
                  isLogedIn: true,
                  isLogedOut: false,
                  user: json}))
          })
          .catch((error) => {
              console.log(error)
              localStorage.removeItem('token')
          });
    }
  }

let dispatch=useDispatch();
  useEffect(() => {
      isToken();

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
          <PrivateRoute exact path={PRIVATE} component={PrivatePage} />
          <Route path={HOME} component={ListPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
