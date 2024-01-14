import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <h1 className="nav-title">Catalog</h1>
            <div className="nav-background"></div>
            <div className="vl"></div>
            <div nav-text>
                <p>Home</p>
                <p>About</p>
                <p>Experiments</p>
                <p>Contact</p>
            </div>
        </div>
    );
}

export default Nav;
