import React from "react";
import PropTypes from 'prop-types';


export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand" to="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" to="#">
                Home <span className="sr-only">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


Header.defaultProps = {
  title: "Your Title Here"
}
Header.propTypes = {
  title: PropTypes.string
}