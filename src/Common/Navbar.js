import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (<nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
      
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
      
            <Link to="attendance" className="navbar-item">
              Attendance List
            </Link>
      
            <Link to="addStudent" className="navbar-item">
                Add Student
            </Link>
      
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>
      
              <div className="navbar-dropdown">
                <a href="https://vsc-github.github.io/QR-attendance-admin-module/" target="_blank" className="navbar-item">
                  QR Display Module
                </a>
                <a href="https://vsc-github.github.io/QR-attendance-student-module/" target="_blank" className="navbar-item">
                  QR Scanner Student Module
                </a>
                <a href="https://nifty-bhaskara-20bb9e.netlify.com" target="_blank" className="navbar-item">
                  QR Attendance Admin Module
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </nav>)
    }
}

export default Navbar;