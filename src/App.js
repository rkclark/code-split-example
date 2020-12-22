import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

const Renewals = React.lazy(() =>
    import("./pages/Renewals" /* webpackChunkName: "renewals" */)
);

const Autocheck = React.lazy(() =>
    import("./pages/Autocheck" /* webpackChunkName: "autocheck" */)
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
                            <Suspense fallback={<div>Renewals skeleton?</div>}>
                                <Renewals />
                            </Suspense>
                        </Route>

                        <Route path="/autocheck">
                            <Suspense fallback={<div>Autocheck skeleton?</div>}>
                                <Autocheck />
                            </Suspense>
                        </Route>

                        <Route path="*">
                            <Suspense fallback={<div>Journey skeleton?</div>}>
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
