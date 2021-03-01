import "./navbar.css";
import React from "react";
import logo from '../images/ecell-logo-bw2.png';


function Navbar() {
  return (
    <div>
    <header className="main-header" >
    <nav className="main-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
        </ul>
      </nav>
      <a href="index.html" className="brand-logo">
      <img src={logo} alt="logo" />
      </a>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Srijan</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
    <nav className="mob-nav">
    <div className="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div className="hamburger"><div></div></div>
    <div className="menu">
      <div>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Srijan</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      </nav>
      </div>
  );
}

export default Navbar;
