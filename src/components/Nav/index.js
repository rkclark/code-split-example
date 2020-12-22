import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/journey/your-vehicle">Your Vehicle</Link>
                </li>
                <li>
                    <Link to="/journey/your-details">Your Details</Link>
                </li>
                <li>
                    <Link to="/journey/your-policy">Your Policy</Link>
                </li>
                <li>
                    <Link to="/renewals">Renewals</Link>
                </li>
                <li>
                    <Link to="/autocheck">Autocheck</Link>
                </li>
            </ul>
        </nav>
    );
}
