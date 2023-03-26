import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import UcmLogo from './image-components/UcmLogo.png';

function NavigationBar() {
return (
<nav className="main-nav-bar">
    <a href="https://ucmo.edu/">
        <img src={UcmLogo} alt="ucm main logo"></img>
    </a>
    <ul>
        <li className="link-item">
            <Link to="/" className ="link-item">Home</Link>
        </li>
        <li className="link-item">
            <Link to="/user" className ="link-item">Users</Link>
        </li>
        <li className="link-item">
            <Link to="/search" className ="link-item">Search</Link>
        </li>
    </ul>
</nav>
)
}

export default NavigationBar