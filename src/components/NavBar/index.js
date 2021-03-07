import React from "react";
// import Contact from "../../pages/Contact";
// import Home from "../../pages/Home";
// import Portfolio from "../../pages/Portfolio";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-sm bg-light">
                <div class="container-fluid">
                    <h1>Fong Vang</h1>
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        {/* <a class="nav-link active" aria-current="page" href="portfolio.html">Portfolio</a> */}
                    {/* <Router>
                        <Route exact path ="/" component={Portfolio} />
                    </Router> */}
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact">Contact</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
        </>
    )
}

export default Header;