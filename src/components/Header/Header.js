import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Header extends Component {

  componentDidMount(){
    $('.navbar-nav>li').click(function(){
      $('.active').toggleClass("active");
      $(this).toggleClass("active");
  })
  }

  render() {
    return (
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <Link
            className="navbar-brand nav-logo active"
            to="/simple-business-website-template/"
          >
            YOUR LOGO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/simple-business-website-template/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <hr />
                  <Link className="dropdown-item" to="/simple-business-website-template/who-we-are">
                    Who We Are
                  </Link>
                  <Link className="dropdown-item" to="/simple-business-website-template/what-we-do">
                    What We Do
                  </Link>
                  <hr />
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/simple-business-website-template/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
