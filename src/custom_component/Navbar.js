import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  //  for about wala page.
  const shAlertMsg = () => {
    props.shAlert("We are on 'About Us' page", "success");

    // this props.shAlert is taking some parameters but this will only be triggered when a particular event
    // will hit hence, we have put this function inside some dummy function & then called it when event hits.

    // Now the react part is we have passed the function like a variable of props.
  };

  const shAlertMsgforHome = () => {
    props.shAlert("We are on 'Home' page", "success");
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={shAlertMsgforHome}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link
                  className="nav-a active"
                  aria-current="page"
                  to="/"
                  onClick={shAlertMsgforHome}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-a" to="/about" onClick={shAlertMsg}>
                  {props.about}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={props.toggleMode}
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string,
};
