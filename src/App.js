import './App.css';
import SinglePage from "./pages/SinglePage/SinglePage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ListPage from "./pages/List/ListPage";
import {ADMIN, HOME, LIST, SIGN_IN, SIGN_UP, SINGLE} from "./Roures";
import Productpage from "./pages/ProductPage/Productpage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

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
                <Route path={HOME} component={ListPage} />
            </Switch>
        </Router>
    </div>
  );
}
export default App;
