import './App.css';
import SinglePage from "./pages/SinglePage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ListPage from "./pages/ListPage";
import {ADMIN, HOME, LIST, SINGLE} from "./Roures";
import Productpage from "./pages/productpage";

function App() {
  return (
    <div >
        <Router>
            <Switch>
                <Route path={LIST}>
                    <ListPage/>
                </Route>
                <Route path={SINGLE}>
                    <SinglePage/>
                </Route>
                <Route path={ADMIN}>
                    <Productpage />
                </Route>
                <Route path={HOME}>
                    <ListPage/>
                </Route>
            </Switch>

        </Router>
    </div>
  );
}
export default App;
