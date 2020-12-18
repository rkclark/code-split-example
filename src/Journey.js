import YourVehicle from "./pages/YourVehicle";
import YourDetails from "./pages/YourDetails";
import YourPolicy from "./pages/YourPolicy";

import { Switch, Route } from "react-router-dom";

export default function Journey() {
    return (
        <div className="App">
            <div className="main">
                <Switch>
                    <Route path="/journey/your-details">
                        <YourDetails />
                    </Route>
                    <Route path="/journey/your-policy">
                        <YourPolicy />
                    </Route>
                    <Route path="*">
                        <YourVehicle />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
