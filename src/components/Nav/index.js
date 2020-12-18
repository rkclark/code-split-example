import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/journey/one">Journey One</Link>
                </li>
                <li>
                    <Link to="/journey/two">Journey Two</Link>
                </li>
                <li>
                    <Link to="/journey/three">Journey Three</Link>
                </li>
                <li>
                    <Link to="/renewals">Renewals</Link>
                </li>
            </ul>
        </nav>
    );
}
