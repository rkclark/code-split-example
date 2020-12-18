import JourneyOne from "./pages/journeyOne";
import JourneyTwo from "./pages/journeyOne";
import JourneyThree from "./pages/journeyOne";

// eslint-disable-next-line no-unused-vars
import AnimateHeight from 'react-animate-height';


import { Switch, Route } from "react-router-dom";

export default function Journey() {
    return (
        <div className="App">
            <div className="main">
                <Switch>
                
                    <Route path="/journey/two">
                        <JourneyTwo />
                    </Route>
                    <Route path="/journey/three">
                        <JourneyThree />
                    </Route>
                    <Route path="*">
                        <JourneyOne />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
