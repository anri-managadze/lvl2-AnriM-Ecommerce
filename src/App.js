import './App.css';
import SinglePage from "./pages/SinglePage/SinglePage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ListPage from "./pages/List/ListPage";
import {ADMIN, HOME, LIST, PRIVATE, SIGN_IN, SIGN_UP, SINGLE} from "./roures";
import Productpage from "./pages/ProductPage/Productpage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PrivatePage from "./pages/PrivatePage/PrivatePage";

function App() {
  return (
    <div >
        <Router>
            <Switch>
                <Route path={LIST} component={ListPage} />
                <Route path={SINGLE} component={SinglePage} />
                <Route path={ADMIN} component={Productpage} />
                <Route exact path={SIGN_IN} component={SignIn} />
                <Route exact path={SIGN_UP} component={SignUp} />
                <Route exact path={PRIVATE} component={PrivatePage} />
                <Route path={HOME} component={ListPage} />
            </Switch>
        </Router>
    </div>
  );
}
export default App;
