import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";

class Header extends Component {
  componentDidMount() {
    $(".navbar-nav>li").click(function () {
      $(".active").toggleClass("active");
      $(this).toggleClass("active");
    });
  }

  renderTooltip = (props) => (
    <Tooltip {...props}> Currently, under construction </Tooltip>
  );

  render() {
    return (
      <header>
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
              <i className="fas fa-bars"> </i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/simple-business-website-template/"
                >
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
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 250, hide: 400 }}
                    overlay={this.renderTooltip}
                  >
                    <Link
                      className="dropdown-item"
                      to="/simple-business-website-template/"
                    >
                      Who We Are
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 250, hide: 400 }}
                    overlay={this.renderTooltip}
                  >
                    <Link
                      className="dropdown-item"
                      to="/simple-business-website-template/"
                    >
                      What We Do
                    </Link>
                  </OverlayTrigger>
                  <hr />
                </div>
              </li>
              <li className="nav-item">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={this.renderTooltip}
                >
                  <Link
                    className="nav-link"
                    to="/simple-business-website-template/"
                  >
                    Contact Us
                  </Link>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
