import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <h1>Fong Vang</h1>
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/index">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
        </>
    )
}

export default Header;