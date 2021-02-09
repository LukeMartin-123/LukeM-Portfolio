import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Luke M
             </Link>
             <div>
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link
              to="/Skills"
              className={window.location.pathname === "/Skills" ? "nav-link active" : "nav-link"}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact" || window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

        </nav>


    )
}
export default Header;
