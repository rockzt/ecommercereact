import React, { useState } from "react";
import classes from "./Navbar.module.css"; // Import your CSS module

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${
        isNavCollapsed ? classes.fadeOut : classes.fadeIn
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <b>Computech</b>
        </a>
        <button
          className={`navbar-toggler ${isNavCollapsed ? "collapsed" : ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNavCollapse}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNavCollapse}>
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNavCollapse}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNavCollapse}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
