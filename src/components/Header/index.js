import React from "react";
// import Contact from "../../pages/Contact";
// import Home from "../../pages/Home";
// import Portfolio from "../../pages/Portfolio";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <h1>Fong Vang</h1>
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact">Contact</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
        </>
    )
}

export default Header;