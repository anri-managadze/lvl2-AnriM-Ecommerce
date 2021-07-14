import './App.css';
import SinglePage from "./Pages/SinglePage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ListPage from "./Pages/ListPage";

import {HOME, LIST, SINGLE} from "./Roures";

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
                <Route path={HOME}>
                    <ListPage/>
                </Route>
            </Switch>

        </Router>
    </div>
  );
}

export default App;
