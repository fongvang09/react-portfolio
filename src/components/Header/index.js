import React from "react";

function Header() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-sm bg-light">
                <div class="container-fluid">
                    <h1>Fong Vang</h1>
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="portfolio.html">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
        </>
    )
}

export default Header;