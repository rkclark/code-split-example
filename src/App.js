import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

const Renewals = React.lazy(() =>
    import("./pages/renewals" /* webpackChunkName: "renewals" */)
);
const Journey = React.lazy(() =>
    import("./Journey" /* webpackChunkName: "journey" */)
);

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <div className="main">
                    <Switch>
                        <Route path="/renewals">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Renewals />
                            </Suspense>
                        </Route>
                        <Route path="*">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Journey />
                            </Suspense>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
