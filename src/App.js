import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Renewals from "./pages/renewals";
import Journey from "./pages/journey";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Journey</Link>
                        </li>
                        <li>
                            <Link to="/renewals">Renewals</Link>
                        </li>
                    </ul>
                </nav>

                <div className="main">
                    <Switch>
                        <Route path="/renewals">
                            <Renewals />
                        </Route>
                        <Route path="*">
                            <Journey />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
