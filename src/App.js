import "./App.css";
import SinglePage from "./pages/SinglePage/SinglePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./pages/List/ListPage";
import {ADMIN, CART, HOME, LIST, PRIVATE, SIGN_IN, SIGN_UP, SINGLE} from "./roures";
import Productpage from "./pages/ProductPage/Productpage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivateRoute from "./component/PrivateRoute";

import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {isToken} from "./store/user/userAction";
import CartPage from "./pages/CartPage/CartPage";
import {selectCart, selectCartCookie} from "./store/cart/cartSelector";
import {setCookieCart} from "./store/cart/cartActionCreator";
import {selectLogedIn} from "./store/user/userSelector";
import {serializeCart} from "./serializes/serializeCart";

function App() {
    let dispatch = useDispatch();
  const isLogedIn = useSelector(selectLogedIn)
  const cart = useSelector(selectCart)

  useEffect(() => {
    dispatch(isToken);
  }, []);

  useEffect(() => {
    if (isLogedIn && document.cookie.length > 0) {
      dispatch(setCookieCart(JSON.parse(selectCartCookie('Cart'))))
    }
  }, [isLogedIn])

  useEffect(() => {
    if (isLogedIn) {
      document.cookie = `Cart=${JSON.stringify(serializeCart(cart))}`
    }
  }, [cart])


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
          <Route exact path={CART} component={CartPage} />
          <Route path={HOME} component={ListPage} />

        </Switch>
      </Router>
    </div>
  );
}
export default App;
